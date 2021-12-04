import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Holding} from '../../models/Holding';

import {FirebaseApp, initializeApp} from 'firebase/app';
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
} from 'firebase/database';
import {Database, DatabaseReference, DataSnapshot, Unsubscribe} from 'firebase/database';
import {DeviceAuthService} from '../device-auth/device-auth.service';

const HOLDINGS_DB: string = 'holdings';

@Injectable({
  providedIn: 'root',
})
export class HoldingsService {
  private _holdings: Holding[];
  private owner: string;

  private readonly firebaseApp: FirebaseApp;
  private readonly database: Database;
  private readonly refHoldings: DatabaseReference;
  // unsubscriber of get data event
  private unsubscriber: Unsubscribe;

  constructor(private deviceAuthService: DeviceAuthService) {
    this._holdings = [];
    this.firebaseApp = initializeApp(environment.firebase);
    this.database = getDatabase(this.firebaseApp);
    this.refHoldings = ref(this.database, `${HOLDINGS_DB}/`);

    this.deviceAuthService.getDeviceId().then(value => {
      this.owner = value;
      // register listening
      this.get();
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
    const refMyHoldings = query(this.refHoldings, orderByChild('owner'), equalTo(this.owner));
    this.unsubscriber = onValue(refMyHoldings, dataSnapshot => {
      this._holdings = this.orderBySymbol(this.convertDataSnapshotToArray(dataSnapshot));
      console.table(this._holdings);
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
