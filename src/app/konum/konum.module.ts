import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KonumPageRoutingModule } from './konum-routing.module';

import { KonumPage } from './konum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KonumPageRoutingModule
  ],
  declarations: [KonumPage]
})
export class KonumPageModule {}
