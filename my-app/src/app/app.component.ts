import { Component } from '@angular/core';
//import { Customer } from './customer';

@Component({
  selector: 'app-root',
  template: `
  <h1 class="col-md-12">{{title}}</h1> 
  <app-payment-detail></app-payment-detail>
  <additional-detail-fields></additional-detail-fields>
  `
})
export class AppComponent {
  title = 'Rent Payment Administration Application';
}
