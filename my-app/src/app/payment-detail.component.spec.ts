import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDetailComponent } from './payment-detail.component';
import { Customer } from './customer';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


describe('PaymentDetailComponent', () => {
    let component: PaymentDetailComponent;
    let fixture: ComponentFixture<PaymentDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PaymentDetailComponent,
                AppComponent],
            imports: [
                FormsModule
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
        expect(component.value).toEqual(0);
    });

    fit('should check if onEnter works', () => {
        component.onEnter(10);
        expect(component.value).toEqual(10);
    })
});
