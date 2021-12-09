import {Injectable} from '@angular/core';
import {Network} from '@capacitor/network';
import {PluginListenerHandle} from '@capacitor/core';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class IsOnlineService {
  private listener: PluginListenerHandle;
  private toast: HTMLIonToastElement;

  constructor(private toastController: ToastController) {}

  public get isOnline(): Promise<boolean> {
    return Network.getStatus().then(value => {
      return value.connected;
    });
  }

  public async register(): Promise<void> {
    const isOnline = await this.isOnline;
    !isOnline && this.showToastOfflineAppStarted();

    this.listener = Network.addListener('networkStatusChange', status => {
      console.debug('Network status changed', status);
      !status.connected && this.showToastOffline().then();
    });
  }

  public unregister(): void {
    this.listener.remove().then();
  }

  private async showToastOffline(): Promise<void> {
    this.showToast("Lost network connection. We will save you data when you're back online.");
  }

  private async showToastOfflineAppStarted(): Promise<void> {
    this.showToast("You are currently offline. We will get your data when you're back online.");
  }

  private async showToast(msg: string) {
    const TOAST_DURATION_MS = 10 * 1000;
    this.toast = await this.toastController.create({
      message: msg,
      duration: TOAST_DURATION_MS,
      buttons: ['Dismiss'],
    });
    await this.toast.present();
  }
}
