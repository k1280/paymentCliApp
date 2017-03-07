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

    it('should check if totalAmount is set to proper value', () => {
        expect(component.totalAmountForm.value.totalAmount).toEqual(205);
    });

    // it('should check if value amount1 is the same as totalAmount', () => {
    //     expect(component.totalAmountForm.value.totalAmount).toEqual(component.partAmountForm.value.amount1)
    // });

    // it('should check if value of totalAmount is undefined', () => {
    //     expect(component.totalAmountForm.value.totalAmount).toBeUndefined();
    // });

    //TODO
    // fit('should check if onEnter works', () => {
    //     component.onEnter(10);
    //     expect(component.form.value.totalAmount).toEqual(10);
    // })

});
