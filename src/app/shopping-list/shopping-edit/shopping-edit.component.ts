import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import _ from 'lodash';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Output() ingredientDeleted = new EventEmitter<number>();
  @Output() ingredientsCleared = new EventEmitter<void>();

  @Input() ingredient: Ingredient;

  constructor() {
  }

  ngOnInit() {
  }

  addIngredient() {
    const name = this.nameInput.nativeElement.value;
    const amount = parseInt(this.amountInput.nativeElement.value);

    this.ingredient = new Ingredient(name, amount);
    this.ingredientAdded.emit(this.ingredient);
  }

  deleteIngredient() {
    const id = _.get(this.ingredient, 'id', null);

    if (id) {
      this.ingredientDeleted.emit(id);
    }

    this.ingredient = null;
  }

  clearIngredients() {
    this.ingredientsCleared.emit();
  }
}
