import {Injectable, OnDestroy} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Holding} from '../../models/Holding';
import {DeviceAuthService} from '../device-auth/device-auth.service';

//#region Firebase imports

import {initializeApp, FirebaseApp} from 'firebase/app';
import {
  getDatabase,
  ref,
  onValue,
  push,
  set,
  remove,
  update,
  query,
  equalTo,
  get,
  orderByChild,
  child,
  Database,
  DatabaseReference,
  DataSnapshot,
  Unsubscribe,
  Query,
} from 'firebase/database';
import {getAuth, signInAnonymously, Auth, UserCredential} from 'firebase/auth';

//#endregion Firebase imports

const HOLDINGS_DB: string = 'holdings';

@Injectable({
  providedIn: 'root',
})
export class HoldingsService implements OnDestroy {
  private _holdings: Holding[];
  private owner: string;

  private readonly firebaseApp: FirebaseApp;
  private readonly auth: Auth;
  private user: UserCredential;
  private database: Database;
  private refHoldings: DatabaseReference;
  private refMyHoldings: Query;
  // unsubscriber of get data event
  private unsubscriber: Unsubscribe;

  constructor(private deviceAuthService: DeviceAuthService) {
    this._holdings = [];
    this.firebaseApp = initializeApp(environment.firebase);
    this.auth = getAuth(this.firebaseApp);

    signInAnonymously(this.auth).then(user => {
      this.user = user;
      this.database = getDatabase(this.firebaseApp);
      this.refHoldings = ref(this.database, `${HOLDINGS_DB}/`);

      this.deviceAuthService.getDeviceId().then(value => {
        this.owner = value;
        this.refMyHoldings = query(this.refHoldings, orderByChild('owner'), equalTo(this.owner));
        // register listening
        this.get();
      });
    });
  }

  /**
   * to cleanly unsubscribe to data updates when service destroyed
   */
  ngOnDestroy() {
    this.unsubscriber();
  }

  public get holdings(): Holding[] {
    return this._holdings;
  }

  //#region CRUD

  /**
   * initial fetch data &
   * register data event listener
   * @private
   */
  private get(): void {
    this.unsubscriber = onValue(this.refMyHoldings, dataSnapshot => {
      this._holdings = this.orderBySymbol(this.convertDataSnapshotToArray(dataSnapshot));
      this._holdings.length > 0 && !environment.production && console.table(this._holdings);
      console.log('save data');
    });
  }

  public refresh(): void {
    typeof this.unsubscriber === 'function' && this.unsubscriber();
    this.get();
  }

  public getByKey(key: string): Promise<Holding> {
    const refDatabase = ref(this.database);
    return get(child(refDatabase, `${HOLDINGS_DB}/${key}`)).then(dataSnapshot => {
      let element = dataSnapshot.val() as Holding;
      // manual remapping of key
      element._key = key;
      return element;
    });
  }

  public create(holding: Holding): void {
    // path to new item
    let refNewHolding = push(this.refHoldings);
    this.setOwnerToMe(holding).then(() => {
      delete holding._key;
      set(refNewHolding, holding).then();
    });
  }

  public update(key: string, holding: Holding): void {
    const refUpdateHolding = ref(this.database, `${HOLDINGS_DB}/${key}`);
    this.setOwnerToMe(holding).then(() => {
      delete holding._key;
      update(refUpdateHolding, holding).then();
    });
  }

  public delete(id: string): void {
    // path to deleting item
    const refDeleteHolding = ref(this.database, `${HOLDINGS_DB}/${id}`);
    remove(refDeleteHolding).then();
  }

  //#endregion CRUD

  //#region Helpers

  public orderBySymbol(holdings: Holding[]): Holding[] {
    return holdings.sort((a, b) => a.symbol.toLowerCase().localeCompare(b.symbol.toLowerCase()));
  }

  private convertDataSnapshotToArray(dataSnapshot: DataSnapshot): Holding[] {
    let array: Holding[] = [];
    dataSnapshot.forEach(item => {
      let value: Holding = item.val();
      value._key = item.key;
      array.push(value);
    });
    return array;
  }

  private setOwnerToMe(holding: Holding): Promise<void> {
    // get owner from promise to make sure, it's loaded
    return this.deviceAuthService.getDeviceId().then(value => {
      holding.owner = value;
    });
  }

  //#endregion Helpers
}
