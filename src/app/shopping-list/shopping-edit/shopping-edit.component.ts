import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  _editedItemIndex: number = null;

  constructor(private slService: ShoppingListService) {
  }

  get editedItemIndex() {
    return this._editedItemIndex;
  }

  set editedItemIndex(idx) {
    this._editedItemIndex = idx;

    if (typeof idx === 'number') {
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount,
      });
    } else {
      this.slForm.reset();
    }
  }

  get editedItem(): Ingredient {
    return this.slService.getIngredient(this.editedItemIndex);
  }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (idx: number) => this.editedItemIndex = idx
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    const { name: ingName, amount: ingAmount } = form.value;
    const newIngredient = new Ingredient(ingName, ingAmount);

    if (typeof this.editedItemIndex === 'number') {
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.editedItemIndex = null;
  }

  onClear() {
    this.editedItemIndex = null;
  }

  onDelete() {
    if (this.editedItemIndex !== null) {
      this.slService.deleteIngredient(this.editedItemIndex);
      this.editedItemIndex = null;
    }
  }
}
