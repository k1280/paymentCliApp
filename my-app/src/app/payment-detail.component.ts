import { Component, Input } from '@angular/core';
//import { Customer } from './customer';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-payment-detail',
    templateUrl: 'payment-detail.component.html'
})

//form model for template
export class PaymentDetailComponent {
    totalAmountForm = new FormGroup({ //totalAmount represents FormGroup which is my form
        name: new FormControl(), //for every field I have a FormControl
        surname: new FormControl(),
        date: new FormControl(),
        totalAmount: new FormControl()
        //IFNO: FormControl takes a string as first argument in case I want to have form control with some default value
    })


    @Input()
    //customer: Customer = new Customer();
    customerDetails: string = "Personal Details"

    //amount1: number = this.customer.totalAmount;


    value = '';
    onEnter(value: string) { this.value = value; }

}