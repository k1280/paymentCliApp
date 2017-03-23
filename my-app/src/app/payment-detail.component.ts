import { totalmem } from 'os';
import { Component, Input, OnInit } from '@angular/core';
import { Customer } from './customer';

import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { AdditionalDetailFieldsComponent } from './additional-detail-fields.component';

@Component({
    selector: 'app-payment-detail',
    templateUrl: 'payment-detail.component.html',
    inputs: ['name', 'surname', 'date', 'totalAmount', 'amount'] //???
})

//I. form model for template
export class PaymentDetailComponent implements OnInit {
    /* II. switched to Form Builder
    1. import of FormBuilder,
    2. inject it to PaymentDetailComponent
    3. form model using FormBuilder.group() in ngOnInit; no changes in the template*/
    totalAmountForm: FormGroup;
    partAmountForm: FormGroup;
    //addPartAmountForm: FormGroup;
    totalFields = {
        name: ['James', Validators.required],
        surname: ['Dean', Validators.required],
        date: '',
        totalAmount: new FormControl(0)
    };
    get detailsFields(): FormArray {
        return <FormArray>this.partAmountForm.get('detailsFields');
    }

    constructor(private formBuilder: FormBuilder) { }

    // III. adding validators
    ngOnInit() {
        this.totalAmountForm = this.formBuilder.group(this.totalFields);

        this.totalFields.totalAmount.valueChanges.subscribe(it => {
            this.detailsFields.controls[0].patchValue({ amount: it });
        })

        this.partAmountForm = this.formBuilder.group({
            detailsFields: this.formBuilder.array([])
        })
        this.addSubpayment();
        this.addSubpayment();
        this.addSubpayment();

    }

    addSubpayment(): void {
        const amountInput = new FormControl(0);
        const item = this.formBuilder.group({
            paymentPurpose: new FormControl(''),
            amount: amountInput
        });
        this.detailsFields.push(item);
 //console.log(this.detailsFields);
            console.log(this.detailsFields.controls[0]);
            console.log(this.detailsFields.controls[1]);
            console.log(this.detailsFields.controls[2]);
            console.log(this.detailsFields.at(0));
        amountInput.valueChanges.subscribe(it => {
            console.log(this.detailsFields);
            console.log(this.detailsFields.controls[0]['amount']);
            this.detailsFields.controls[1]['amount'].setValue(this.totalFields.totalAmount.value - this.detailsFields.controls[0]['amount'].value);
            //setValue(this.totalFields.totalAmount.value - this.detailsFields.controls[0]['amount'].value); <- Cannot read property 'setValue' of undefined
        });


    }
    //old approach
    //   this.detailsFields.amount1.valueChanges.subscribe(it => {
    //             this.detailsFields.amount2.setValue(this.totalFields.totalAmount.value - this.detailsFields.amount1.value);
    //         })
    //TODO addSubpayment - subscribe; Function to set values in inputs and display other inputs if necessary

    @Input()
    customer: Customer = new Customer();
    customerDetails: string = "Personal Details"

}