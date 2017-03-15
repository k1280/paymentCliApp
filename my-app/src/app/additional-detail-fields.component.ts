import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
    selector: 'additional-detail-fields',
    templateUrl: 'additional-detail-fields.component.html',
    inputs: ['amount4', 'amount5']
})

export class AdditionalDetailFieldsComponent implements OnInit {
    subpaymentForm: FormGroup;
    
    ngOnInit(): void {

    }
}

