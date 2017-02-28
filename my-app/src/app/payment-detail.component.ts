import { Component, Input, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
    selector: 'app-payment-detail',
    templateUrl: 'payment-detail.component.html'
})

export class PaymentDetailComponent implements OnInit {
    @Input()
    customer: Customer = new Customer();
    customerDetails: string = "Personal Details"

    amount1: number = this.customer.totalAmount;

    value = '';
    onEnter(paramValue: string) {
        this.value = paramValue;
    }

    ngOnInit() {
      //0
     }
}