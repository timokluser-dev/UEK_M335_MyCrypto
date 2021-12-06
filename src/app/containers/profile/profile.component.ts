import {Component, OnInit} from '@angular/core';
import {DeviceAuthService} from '../../services/device-auth/device-auth.service';
import {Clipboard} from '@capacitor/clipboard';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  // ionic toast to only show one element
  private toast: HTMLIonToastElement;

  constructor(
    private deviceAuthService: DeviceAuthService,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  public get deviceId(): string {
    return this.deviceAuthService.deviceId;
  }

  public async copyToClipboard(): Promise<void> {
    // dismiss toast if already present
    this.toast && (await this.toast.dismiss());

    await Clipboard.write({
      string: this.deviceId,
    });

    const TOAST_DURATION_MS = 3 * 1000;
    this.toast = await this.toastController.create({
      message: 'Device Identifier copied 😎',
      duration: TOAST_DURATION_MS,
      buttons: ['Dismiss'],
    });
    await this.toast.present();
  }
}
