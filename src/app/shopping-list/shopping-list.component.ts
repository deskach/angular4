import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import _ from 'lodash';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  selectedIngredient: Ingredient;

  private _ingredients: { [id: string]: Ingredient } = {};

  get ingredients() {
    return _.values(this._ingredients);
  }

  constructor() {
  }

  ngOnInit() {
  }

  addIngredient(ingredient: Ingredient) {
    this._ingredients[ingredient.id] = ingredient;
  }

  deleteIngredient(id: number) {
    delete this._ingredients[id];
  }

  clearIngredients() {
    this._ingredients = {};
  }
}
