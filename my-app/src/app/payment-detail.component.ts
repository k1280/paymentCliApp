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
            paymentPurpose2: undefined,
            amount2: undefined,
            paymentPurpose3: undefined,
            amount3: undefined
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
    //amount1: number = this.customer.totalAmount;
    //value;
    //onEnter(value: number) { this.value = value; }

    // onUpdate() {
    //     console.log('vndsjlk');
    //     this.partAmountForm.value.amount1 = this.partAmountForm.value.amount1 - this.partAmountForm.value.amount2;
    //     return this.partAmountForm.value.amount1;

    // }

    // checkAmountsAndChange() {
    //     if (!!this.partAmountForm.value.amount2) {
    //         if (!!this.partAmountForm.value.amount3) {
    //             this.onUpdate();
    //             console.log('amount3')
    //         }
    //         this.onUpdate();
    //         console.log('amount2');
    //     }
    // }

    onUpdate(value1: number, value2: number) {
        value1 = value1 - value2;
        return value1;
    }

    checkAmountsAndChange() {
        if (!!this.partAmountForm.value.amount2 && this.partAmountForm.value.amount3 == null && this.partAmountForm.value.amount3 == undefined) {
            this.partAmountForm.value.amount1 = this.onUpdate(this.partAmountForm.value.amount1, this.partAmountForm.value.amount2);
        }
        else if (!!this.partAmountForm.value.amount3 && !!this.partAmountForm.value.amount2) {
            this.partAmountForm.value.amount1 = this.onUpdate(this.partAmountForm.value.amount1, this.partAmountForm.value.amount3);
        }
        else if (!!this.partAmountForm.value.amount3 && this.partAmountForm.value.amount2 == null && this.partAmountForm.value.amount2 == undefined) {
            this.partAmountForm.value.amount1 = this.onUpdate(this.partAmountForm.value.amount1, this.partAmountForm.value.amount3);
        } else { //... 
        }
    }





}