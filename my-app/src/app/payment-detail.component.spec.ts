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
        expect(component.detailsFields.amount1.value).toEqual(0);
        expect(component.detailsFields.amount2.value).toEqual(0);
        expect(component.detailsFields.amount3.value).toEqual(0);
    });

    it('should keep sum of subpayments equal to total amount', () => {
        component.totalFields.totalAmount.setValue(20);
        component.detailsFields.amount1.setValue(5);
        expect(component.detailsFields.amount2.value).toEqual(15);
    })

    it('should set the value of amount1 to value of totalAmount ', () => {
        component.totalFields.totalAmount.setValue(20);
        expect(component.detailsFields.amount1.value).toEqual(20);
    });

    xit('should check if value amount1 is the same as totalAmount', () => {
        expect(component.totalAmountForm.value.totalAmount).toEqual(component.partAmountForm.value.amount1)
    });

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
