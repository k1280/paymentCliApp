import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

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
        .reduce((acc, cur) => acc + cur, 0 );
      if (sum < val) {
        return { minSum: val }
      }
    })
  }
}