import {Component, OnDestroy, OnInit} from '@angular/core';
import {IsOnlineService} from './services/is-online/is-online.service';
import {LockScreenOrientationService} from './services/lock-screen-orientation/lock-screen-orientation.service';
import {HoldingsService} from './services/holdings/holdings.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private holdingsService: HoldingsService,
    private isOnlineService: IsOnlineService,
    private lockScreenOrientationService: LockScreenOrientationService
  ) {}

  ngOnInit(): void {
    this.isOnlineService.register();
    this.lockScreenOrientationService.lock();
  }

  ngOnDestroy(): void {
    this.isOnlineService.unregister();
    this.holdingsService.unsubscribe();
  }
}
