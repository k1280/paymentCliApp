import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray, AbstractControl, ValidatorFn } from '@angular/forms';
import { PaymentDetailComponent } from './payment-detail.component';

@Component({
    selector: 'additional-detail-fields',
    templateUrl: 'additional-detail-fields.component.html',
    inputs: ['amount4', 'amount5']
})

export class AdditionalDetailFieldsComponent implements OnInit {
    subpaymentForm: FormGroup;

    get subpayments(): FormArray {
        return <FormArray>this.subpaymentForm.get('subpayments');
    }

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.subpaymentForm = this.formBuilder.group({
            subpayments: this.formBuilder.array([this.buildSubpayments()])
        })
    }

    addSubpayment(): void {
        this.subpayments.push(this.buildSubpayments());
    }

    buildSubpayments(): FormGroup {
        return this.formBuilder.group({
            paymentPurpose1: '',
            amount1: ''
        });
    }
}

