import { Component } from '@angular/core';
import { Customer } from './customer.interface';

@Component({
  selector: 'app-root',
  template: `
  <h1 class="col-md-12">{{title}}</h1> 
  <app-payment-detail></app-payment-detail>
  `
})
export class AppComponent {
  title = 'Rent Payment Administration Application';
}
