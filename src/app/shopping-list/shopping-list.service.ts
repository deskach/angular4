import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {

  constructor() {
  }

  private _ingredients: { [id: string]: Ingredient } = {};

  get ingredients() {
    return Object.keys(this._ingredients).map(k => this._ingredients[k]);
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
    for (const ingredient of ingredients) {
      this.addIngredient(ingredient);
    }
  }
}
