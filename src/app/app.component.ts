import {Component, OnDestroy, OnInit} from '@angular/core';
import {IsOnlineService} from './services/is-online/is-online.service';
import {LockScreenOrientationService} from './services/lock-screen-orientation/lock-screen-orientation.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private isOnlineService: IsOnlineService,
    private lockScreenOrientationService: LockScreenOrientationService
  ) {}

  ngOnDestroy(): void {
    this.isOnlineService.unregister();
  }

  ngOnInit(): void {
    this.isOnlineService.register();
    this.lockScreenOrientationService.lock();
  }
}
