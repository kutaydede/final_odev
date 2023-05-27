import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Location2Page } from './location2.page';

const routes: Routes = [
  {
    path: '',
    component: Location2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Location2PageRoutingModule {}
