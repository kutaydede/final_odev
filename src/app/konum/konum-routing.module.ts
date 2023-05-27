import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KonumPage } from './konum.page';

const routes: Routes = [
  {
    path: '',
    component: KonumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KonumPageRoutingModule {}
