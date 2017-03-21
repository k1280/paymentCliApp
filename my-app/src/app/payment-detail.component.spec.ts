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

    it('should check intial state of inputs', () => {
        expect(component.totalFields.totalAmount.value).toEqual(0);
        // expect(component.detailsFields.amount1.value).toEqual(0);
        // expect(component.detailsFields.amount2.value).toEqual(0);
        // expect(component.detailsFields.amount3.value).toEqual(0);
    });
    
    it('should check if value amount is the same as totalAmount', () => {
        component.totalFields.totalAmount.setValue(30);
        expect(component.totalFields.totalAmount.value).toEqual(component.detailsFields.controls[0].value.amount);
    });

    // it('should keep sum of subpayments equal to total amount', () => {
    //     component.totalFields.totalAmount.setValue(20);
    //     component.detailsFields.amount1.setValue(5);
    //     expect(component.detailsFields.amount2.value).toEqual(15);
    // });

    // it('should keep sum of subpayments equal to total amount', () => {
    //     component.totalFields.totalAmount.setValue(20);
    //     component.detailsFields.amount1.setValue(4);
    //     component.detailsFields.amount2.setValue(5);
    //     expect(component.detailsFields.amount3.value).toEqual(11);
    // });

    // it('should display input for amount4 if sum of 3 first subpayments is less than totalAmount', () => {
    //     component.totalFields.totalAmount.setValue(30);
    //     component.detailsFields.amount1.setValue(5);
    //     component.detailsFields.amount2.setValue(5);
    //     component.detailsFields.amount3.setValue(15);
    //     expect(component.detailsFields.amount4).toBeDefined();
    // });

    // it('should set amout4 with the difference when sum of 3 first subpayments is less than totalAmount', () => {
    //     component.totalFields.totalAmount.setValue(30);
    //     component.detailsFields.amount1.setValue(5);
    //     component.detailsFields.amount2.setValue(5);
    //     component.detailsFields.amount3.setValue(15);
    //     expect(component.detailsFields.amount4.value).toEqual(5);
    // });

    // it('should set the value of amount1 to value of totalAmount ', () => {
    //     component.totalFields.totalAmount.setValue(20);
    //     expect(component.detailsFields.amount1.value).toEqual(20);
    // });

    xit('should check if value of totalAmount is undefined', () => {
        expect(component.totalAmountForm.value.totalAmount).toBeUndefined();
    });

    // it('should check if value of totalAmount has changed', () => {

    // });

    // it('should check if value of totalAmount has changed', () => {

    // });

    //  it('should check if onEnter set value of amount1 to proper one', () => {

    // });









});
