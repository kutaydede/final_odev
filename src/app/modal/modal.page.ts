import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.page.html',
  styleUrls: ['modal.page.scss'],
})
export class ModalPage {
  @Input() detail: string | undefined;
  public isOpenModel = false;

  constructor(public modalController: ModalController) {}

  closeModal() {
    this.isOpenModel = false;

    this.modalController.dismiss({
      'dismissed': true
    });
  }
  async openModal(detail: string) {
    this.isOpenModel = true;
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        detail: detail
      }
    });
    return await modal.present();
  }
}
