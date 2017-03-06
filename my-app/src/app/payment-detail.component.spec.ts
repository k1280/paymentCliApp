import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDetailComponent } from './payment-detail.component';
import { Customer } from './customer';
import { AppComponent } from './app.component';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';


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
                FormBuilder, 
                FormGroup, 
                Validators
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PaymentDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should check if value is set up to 0', () => {
        expect(component.totalAmountForm.value).toEqual(0);
    });

    //pod nowy html - wykorzystanie FormGroup(???)
    it('should check if totalAmount is set up to 0', () => {
        expect(component.totalAmountForm.value.totalAmount).toEqual(0);
    });

    // fit('should check if onEnter works', () => {
    //     component.onEnter(10);
    //     expect(component.form.value.totalAmount).toEqual(10);
    // })

    });
