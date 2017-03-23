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
        expect(component.detailsFields.controls[0].value.amount).toEqual(0);
        expect(component.detailsFields.controls[1].value.amount).toEqual(0);
        expect(component.detailsFields.controls[2].value.amount).toEqual(0);
    });

    it('should check if value amount is the same as totalAmount', () => {
        component.totalFields.totalAmount.setValue(30);
        expect(component.totalFields.totalAmount.value).toEqual(component.detailsFields.controls[0].value.amount);
    });

    it('should keep sum of subpayments equal to total amount', () => {
        component.totalFields.totalAmount.setValue(20);
        component.detailsFields.controls[0].patchValue({ amount: 5 });
        expect(component.detailsFields.controls[1].value.amount).toEqual(15);
    });

    xit('should keep sum of subpayments equal to total amount', () => {
        component.totalFields.totalAmount.setValue(25);
        component.detailsFields.controls[0].patchValue({ amount: 5 });
        component.detailsFields.controls[1].patchValue({ amount: 15 });
        expect(component.detailsFields.controls[2].value.amount).toEqual(5);
    });

    xit('should display new input for amount if sum of 3 first subpayments is less than totalAmount', () => {
        component.totalFields.totalAmount.setValue(300);
        component.detailsFields.controls[0].patchValue({ amount: 5 });
        component.detailsFields.controls[1].patchValue({ amount: 15 });
        component.detailsFields.controls[2].patchValue({ amount: 15 });
        expect(component.detailsFields.controls[3].value.amount).toBeDefined();
    });

    xit('should set amount with the difference when sum of 3 first subpayments is less than totalAmount', () => {
        component.totalFields.totalAmount.setValue(40);
        component.detailsFields.controls[0].patchValue({ amount: 5 });
        component.detailsFields.controls[1].patchValue({ amount: 15 });
        component.detailsFields.controls[2].patchValue({ amount: 15 });
        expect(component.detailsFields.controls[3].value.amount).toEqual(5);
    });

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
