import { Component, Input, OnInit } from '@angular/core';
import { Customer } from './customer';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-payment-detail',
    templateUrl: 'payment-detail.component.html',
    inputs: ['name', 'surname', 'date', 'totalAmount', 'amount1', 'amount2', 'amount3'] //???
})

//I. form model for template
export class PaymentDetailComponent implements OnInit {
    /* II. switched to Form Builder
    1. import of FormBuilder,
    2. inject it to PaymentDetailComponent
    3. form model using FormBuilder.group() in ngOnInit; no changes in the template*/
    totalAmountForm: FormGroup;
    partAmountForm: FormGroup;
    totalFields = {
        name: ['James', Validators.required],
        surname: ['Dean', Validators.required],
        date: '',
        totalAmount: new FormControl(0)
    };

    detailsFields = {
        paymentPurpose1: new FormControl(''), //previously FormGroup 8.03.17
        amount1: new FormControl(0),
        paymentPurpose2: new FormControl(''),
        amount2: new FormControl(0),
        paymentPurpose3: new FormControl(''),
        amount3: new FormControl(0)
    }
    constructor(private formBuilder: FormBuilder) { }

    // III. adding validators
    ngOnInit() {
        this.totalAmountForm = this.formBuilder.group(this.totalFields);
        //console.log(this.totalAmountForm.get('totalAmount'));
        this.partAmountForm = this.formBuilder.group(this.detailsFields);

        this.totalFields.totalAmount.valueChanges.subscribe(it => {
            this.detailsFields.amount1.setValue(it);
        })

        this.detailsFields.amount1.valueChanges.subscribe(it => {
            this.detailsFields.amount2.setValue(this.totalFields.totalAmount.value - this.detailsFields.amount1.value);
        })

        

        //code for passing the rest of the value to amount2 if we will change amount1

    }

    @Input()
    customer: Customer = new Customer();
    customerDetails: string = "Personal Details"

}