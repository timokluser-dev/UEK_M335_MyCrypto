import {Component, OnDestroy, OnInit} from '@angular/core';
import {Holding} from '../../models/Holding';
import * as numeral from 'numeral';
import {HoldingsService} from '../../services/holdings/holdings.service';
import {IsOnlineService} from '../../services/is-online/is-online.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public searchTerm: string = '';

  constructor(private holdingsService: HoldingsService, private isOnlineService: IsOnlineService) {}

  ngOnInit() {
    setTimeout(() => {
      this.refreshHoldings(null);
    }, 1500);
  }

  ngOnDestroy() {
    this.holdingsService = null;
  }

  get holdings(): Holding[] {
    console.log('access holdings get', this.holdingsService.holdings.length);
    return this.holdingsService.holdings.filter(
      value =>
        value.symbol.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        value.exchange.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        // amount should start with
        value.amount.toString().startsWith(this.searchTerm.toLowerCase())
    );
  }

  public refreshHoldings($event): void {
    this.holdingsService.refresh();
    // confirm refresh
    $event?.target.complete();
  }

  public deleteHolding(holding: Holding): void {
    this.holdingsService.delete(holding._key);
  }

  public formatNumber(numberToFormat: number): string {
    return numeral(numberToFormat).format('0,0.00');
  }

  public getHoldingImage(holding: Holding): string {
    return 'assets/cryptos/fallback.png';
  }
}
