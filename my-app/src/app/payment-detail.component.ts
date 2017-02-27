import { Component, Input } from '@angular/core';
import { Customer } from './customer';

@Component({
selector: 'app-payment-detail',
templateUrl: 'payment-detail.component.html'
})

export class PaymentDetailComponent {
    @Input()
    customer: Customer = new Customer();
    customerDetails: string = "Personal Details"

    
}