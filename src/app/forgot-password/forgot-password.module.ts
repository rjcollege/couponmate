import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ForgotPasswordComponentRoutingModule } from './forgot-password-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPasswordComponentRoutingModule
  ],
  declarations: [ForgotPasswordComponent]
})
export class ForgotPasswordComponentModule {}
