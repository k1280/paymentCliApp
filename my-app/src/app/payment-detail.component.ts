import { format } from 'util';
import { Component, Input, OnInit } from '@angular/core';
import { Customer } from './customer.interface';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
    moduleId: module.id,
    selector: 'app-payment-detail',
    templateUrl: 'payment-detail.component.html'
})

export class PaymentDetailComponent implements OnInit {
    @Input()

    public myForm: FormGroup; //model driven form
    public submitted: boolean;
    public events: any[] = [];

    constructor(private _fb: FormBuilder) { } // to simplify initialization
    
    //customer: Customer = new Customer();
    //amount1: number = this.customer.totalAmount;
    // customerDetails: string = "Personal Details"

    // value;
    // onEnter(paramValue: number) {
    //     this.value = paramValue;
    // }

    ngOnInit() {
        // the long way
        // this.myForm = new FormGroup({
        //     name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
        //     address: new FormGroup({
        //         address1: new FormControl('', <any>Validators.required),
        //         postcode: new FormControl('8000')
        //     })
        // });

        // the short way
        this.myForm = this._fb.group({
            name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            address: this._fb.group({
                street: ['', <any>Validators.required],
                postcode: ['8000']
            })
        });

        // subscribe to form changes  
        this.subcribeToFormChanges();

        // Update single value
        (<FormControl>this.myForm.controls['name'])
            .setValue('John', { onlySelf: true });

        // Update form model
        // const people = {
        // 	name: 'Jane',
        // 	address: {
        // 		street: 'High street',
        // 		postcode: '94043'
        // 	}
        // };

        // (<FormGroup>this.myForm)
        //     .setValue(people, { onlySelf: true });

    }

    subcribeToFormChanges() {
        const myFormStatusChanges$ = this.myForm.statusChanges;
        const myFormValueChanges$ = this.myForm.valueChanges;

        myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
        myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
    }

    save(model: Customer, isValid: boolean) {
        this.submitted = true;
        console.log(model, isValid);
    }
}