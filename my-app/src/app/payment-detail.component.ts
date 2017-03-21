import { Component, Input, OnInit } from '@angular/core';
import { Customer } from './customer';

import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { AdditionalDetailFieldsComponent } from './additional-detail-fields.component'

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
    addPartAmountForm: FormGroup;
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

    additionalDetailsFields = {
        payment: new FormArray([
            new FormControl(null)
        ])
    }
    constructor(private formBuilder: FormBuilder) { }

    // III. adding validators
    ngOnInit() {
        this.totalAmountForm = this.formBuilder.group(this.totalFields);
        this.partAmountForm = this.formBuilder.group(this.detailsFields);
        this.addPartAmountForm = this.formBuilder.group(this.additionalDetailsFields);

        this.totalFields.totalAmount.valueChanges.subscribe(it => {
            this.detailsFields.amount1.setValue(it);
        })

        this.detailsFields.amount1.valueChanges.subscribe(it => {
            this.detailsFields.amount2.setValue(this.totalFields.totalAmount.value - this.detailsFields.amount1.value);
        })

        this.detailsFields.amount2.valueChanges.subscribe(it => {
            this.detailsFields.amount3.setValue(this.totalFields.totalAmount.value - this.detailsFields.amount1.value - this.detailsFields.amount2.value);
        })

        //code for passing the rest of the value to amount2 if we will change amount1

    }

    @Input()
    customer: Customer = new Customer();
    customerDetails: string = "Personal Details"

}

// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder } from '@angular/forms';

// @Component({
//     moduleId: module.id,
//     selector: 'app-payment-detail',
//     templateUrl: './payment-detail.component.html',
// })



// export class PaymentDetailComponent implements OnInit {
//     totalAmountForm: FormGroup;
//     partAmountForm: FormGroup;

//     totalFields = {
//         name: 'James',
//         surname: 'Dean',
//         date: '',
//         totalAmount: ''
//     };

//     detailsFields = {
//         paymentPurpose1: 'fsa',
//         amount1: 100
//     };

//     constructor(private formBuilder: FormBuilder) { }

//     ngOnInit(): void {
//         this.totalAmountForm = this.formBuilder.group(this.totalFields);
//         //this.detailsFields = this.formBuilder.group(this.amount1);
//     }

// }