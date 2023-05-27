import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LocationPage } from '../location/location.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalCtrl:ModalController) {}

  async openKonum(){
    let modal =await this.modalCtrl.create({
      component:LocationPage
    })
    modal.present()
  }
}
