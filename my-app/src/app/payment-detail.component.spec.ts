import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDetailComponent } from './payment-detail.component';
import { Customer } from './customer';
import { AppComponent } from './app.component';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


describe('PaymentDetailComponent', () => {
    let component: PaymentDetailComponent;
    let fixture: ComponentFixture<PaymentDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PaymentDetailComponent,
                AppComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule
                
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PaymentDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    //checks if totalAmount is set to proper value
    it('should check if value of totalAmount is set to proper value', () => {
        expect(component.totalAmountForm.value.totalAmount).toEqual(205);
    });

    //checks if totalAmount is undefined
    // it('should check if value of totalAmount is undefined', () => {
    //     expect(component.totalAmountForm.value.totalAmount).toBeUndefined();
    // });

    //some tests, todo..
    // fit('should check if onEnter works', () => {
    //     component.onEnter(10);
    //     expect(component.form.value.totalAmount).toEqual(10);
    // })

    });
