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
            totalAmount: new FormControl(205)
        };

    detailsFields = {
            paymentPurpose1: new FormControl(''),
            amount1: new FormControl(0),
            paymentPurpose2: new FormControl(''),
            amount2: new FormControl(),
            paymentPurpose3: new FormControl(''),
            amount3: new FormControl()
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

    }

    @Input()
    customer: Customer = new Customer();
    customerDetails: string = "Personal Details"
    
}