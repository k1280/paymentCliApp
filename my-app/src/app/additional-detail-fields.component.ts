import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';

@Component({
    selector: 'additional-detail-fields',
    templateUrl: 'additional-detail-fields.component.html',
    inputs: ['amount4', 'amount5']
})

export class AdditionalDetailFieldsComponent {
    @Input()
    public itemsFormArray: FormArray;

    addItem() {
        this.itemsFormArray.push(AdditionalDetailFieldsComponent.buildItem(''))
    }

    static buildItems() {
        return new FormArray([
            AdditionalDetailFieldsComponent.buildItem('aaa'),
            AdditionalDetailFieldsComponent.buildItem('')],
            ItemsValidators.minQuantitySum(300))
    }
}

class ItemsValidators {

    static minQuantitySum(val: number) {
        return (c: AbstractControl) => {
            let sum = c.value
                .map(item => item.quantity)
                .reduce((acc, cur) => acc + cur, 0);
            if (sum < val) {
                return { minSum: val }
            }
        })
    }
}

@Component({
    selector: 'item-control',
    template:
    `
<div class="form-group row" [formGroup]="item">
  <div class="col-sm-6">
    <label [attr.for]="'name'+index">Name</label>
    <input type="text" class="form-control" [attr.id]="'name'+index" formControlName="name">
  </div>
  <div class="col-sm-5">
    <label [attr.for]="'quantity'+index">Quantity</label>
    <input type="number" class="form-control" [attr.id]="'quantity'+index" formControlName="quantity">
  </div>
  <div class="col-sm-1 py-1">
    <button type="button" class="btn" (click)="removed.emit(index)">-</button>
  </div>
</div>
`
})
export class ItemFormControlComponent {

    @Input()
    public index: number;

    @Input()
    public item: FormGroup;

    @Output()
    public removed: EventEmitter<number> = new EventEmitter<number>();

    static buildItem(val: string) {
        return new FormGroup({
            name: new FormControl(val, Validators.required),
            quantity: new FormControl(100)
        })
    }
}