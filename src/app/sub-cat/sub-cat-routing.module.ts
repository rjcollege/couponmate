import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubCatPage } from './sub-cat.page';

const routes: Routes = [
  {
    path: '',
    component: SubCatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubCatPageRoutingModule {}
