import { Component, OnInit } from '@angular/core';
import { InputXofComponent } from '../components/input-xof/input-xof.component';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
  entryComponents: [InputXofComponent]
})
export class PaymentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
