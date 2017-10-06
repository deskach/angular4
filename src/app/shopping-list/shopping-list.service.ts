import {Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import _ from 'lodash';

@Injectable()
export class ShoppingListService {

  constructor() {
  }

  private _ingredients: { [id: string]: Ingredient } = {};

  get ingredients() {
    return _.values(this._ingredients);
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

  addIngredients(ingredients: Ingredient[]) {
    for (let ingredient of ingredients) {
      this.addIngredient(ingredient);
    }
  }
}
