import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import _ from 'lodash';
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  @Input() ingredient: Ingredient;

  constructor(private _slService: ShoppingListService) {
  }

  ngOnInit() {
  }

  addIngredient() {
    const name = this.nameInput.nativeElement.value;
    const amount = parseInt(this.amountInput.nativeElement.value);

    this.ingredient = new Ingredient(name, amount);
    this._slService.addIngredient(this.ingredient);
  }

  deleteIngredient() {
    const id = _.get(this.ingredient, 'id', null);

    if (id) {
      this._slService.deleteIngredient(id);
    }

    this.ingredient = null;
  }

  clearIngredients() {
    this._slService.clearIngredients();
  }
}
