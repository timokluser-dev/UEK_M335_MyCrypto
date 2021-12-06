import {Component, OnInit} from '@angular/core';
import {Holding} from '../../models/Holding';
import * as numeral from 'numeral';
import {HoldingsService} from '../../services/holdings/holdings.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public searchTerm: string = '';

  constructor(private holdingsService: HoldingsService) {}

  ngOnInit() {
    this.holdingsService.cleanRefresh();
  }

  public get holdings(): Holding[] {
    return this.holdingsService.holdings.filter(
      value =>
        value.symbol.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        value.exchange.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        // amount should start with
        value.amount.toString().startsWith(this.searchTerm.toLowerCase())
    );
  }

  public refreshHoldings($event): void {
    this.holdingsService.refresh($event);
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
