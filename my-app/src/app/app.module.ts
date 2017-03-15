import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PaymentDetailComponent } from './payment-detail.component';
import {AdditionalDetailFieldsComponent} from './additional-detail-fields.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailComponent,
    AdditionalDetailFieldsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
