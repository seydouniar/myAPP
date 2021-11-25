import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentPageRoutingModule } from './payment-routing.module';

import { PaymentPage } from './payment.page';
import { ComponentsModule } from '../components/components.module';
import { InputXofComponent } from '../components/input-xof/input-xof.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PaymentPageRoutingModule
  ],
  declarations: [PaymentPage,InputXofComponent]
})
export class PaymentPageModule {}
