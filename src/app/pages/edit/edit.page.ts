import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HoldingsService} from '../../services/holdings/holdings.service';
import {Holding} from '../../models/Holding';
import {Browser} from '@capacitor/browser';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  public key: string | null;
  public holding: Holding | null;
  public doValidate: boolean = false;

  public model: Holding = {
    _key: null,
    symbol: '',
    amount: null,
    exchange: '',
    owner: null,
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private holdingsService: HoldingsService
  ) {
    this.key = this.activatedRoute.snapshot.paramMap.get('key');

    !this.isNewRecord &&
      this.holdingsService
        .getByKey(this.key)
        .then(value => {
          this.holding = value;
          this.model = this.holding;
        })
        .catch(e => this.router.navigate(['/ui/home']));
  }

  ngOnInit() {}

  /**
   * validation errors for every field
   */
  public get errors(): FormError {
    return {
      symbol: this.doValidate && this.model.symbol.trim().length == 0,
      amount: this.doValidate && (this.model.amount < 0 || this.model.amount == null),
      exchange: this.doValidate && this.model.exchange.trim().length == 0,
    };
  }

  public get isNewRecord(): boolean {
    return this.key === null;
  }

  public get isEmptySymbol(): boolean {
    return this.model.symbol.length == 0;
  }

  public onChangeSymbol(): void {
    this.model.symbol = this.model.symbol.toUpperCase().replace(' ', '');
  }

  public onChangeAmount(): void {
    this.model.amount = this.model.amount < 0 ? 0 : this.model.amount;
  }

  private isValid(): boolean {
    for (const key in this.errors) {
      if (this.errors[key]) return false;
    }
    return true;
  }

  public save(): void {
    this.doValidate = true;
    if (!this.isValid()) return;

    if (this.isNewRecord) {
      this.holdingsService.create(this.model);
    } else {
      this.holdingsService.update(this.key, this.model);
    }

    this.router.navigate(['/ui/home']);
  }

  //#region Exchanges Linking

  public openBinance(): void {
    this.isNewRecord && (this.model.exchange = 'Binance');
    this.openBrowser(`https://www.binance.com/en/trade/${this.model.symbol}_USDT`);
  }

  public openFtx(): void {
    this.isNewRecord && (this.model.exchange = 'FTX');
    this.openBrowser(`https://ftx.com/trade/${this.model.symbol}/USDT`);
  }

  public openCoinbase(): void {
    this.isNewRecord && (this.model.exchange = 'Coinbase');
    this.openBrowser(`https://pro.coinbase.com/trade/${this.model.symbol}-USDT`);
  }

  public openBitpanda(): void {
    this.isNewRecord && (this.model.exchange = 'Bitpanda');
    this.openBrowser(`https://exchange.bitpanda.com/${this.model.symbol}_USDT`);
  }

  private openBrowser(url: string): void {
    Browser.open({url: url});
  }

  //#endregion Exchanges Linking
}

interface FormError {
  symbol: boolean;
  amount: boolean;
  exchange: boolean;
}
