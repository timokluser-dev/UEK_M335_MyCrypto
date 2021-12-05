import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LockScreenOrientationService {
  constructor() {}

  /**
   * lock the screen orientation for mobile and web
   * ScreenOrientation.lock(orientation)
   * may not be supported by all browsers
   * @see https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/lock
   * @private
   */
  public lock(): void {
    screen.orientation
      .lock('portrait')
      .catch(e => console.debug('ScreenOrientation.lock not available in current browser'));
  }
}
