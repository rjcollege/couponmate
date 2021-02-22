import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { RegisterComponentRoutingModule } from './register-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterComponentRoutingModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterComponentModule {}
