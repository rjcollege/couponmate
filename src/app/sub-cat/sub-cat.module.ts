import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubCatPageRoutingModule } from './sub-cat-routing.module';

import { SubCatPage } from './sub-cat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubCatPageRoutingModule
  ],
  declarations: [SubCatPage]
})
export class SubCatPageModule {}
