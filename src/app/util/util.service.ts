import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Injectable()
export class UtilService {
  private isUserSharingLocation: boolean = false;
  constructor(
    private toastCtrl: ToastController
  ) { }

  public async showToast(
    message: string,
    color: string = 'dark',
    duration: number = 1500,
    position: string = 'bottom',
    showCloseButton: boolean = false): Promise<any> {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: duration,
      color: color,
    // @ts-ignore
      position: position,
      showCloseButton: showCloseButton,
      translucent: true,
    });
    toast.present();
  }

  public startSharing(): void {
    this.isUserSharingLocation = true;
  }

  public stopSharing(): void {
    this.isUserSharingLocation = false;
  }

  public isSharing(): boolean {
    return this.isUserSharingLocation;
  }
}
