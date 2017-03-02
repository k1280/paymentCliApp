import { Component, Input, OnInit } from '@angular/core';
//import { Customer } from './customer';

import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-payment-detail',
    templateUrl: 'payment-detail.component.html'
})

//form model for template
export class PaymentDetailComponent implements OnInit {
    /*switched to Form Builder
    1. import of FormBuilder,
    2. inject it to PaymentDetailComponent
    3. form model using FormBuilder.group() in ngOnInit; no changes in the template*/
    totalAmountForm: FormGroup;
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.totalAmountForm = this.formBuilder.group({
            name: '',
            surname:'',
            date: '',
            totalAmount: ''
        });
    }

    @Input()
    //customer: Customer = new Customer();
    customerDetails: string = "Personal Details"
    //amount1: number = this.customer.totalAmount;
    value = '';
    onEnter(value: string) { this.value = value; }

}