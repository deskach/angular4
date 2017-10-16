import { Injectable } from '@angular/core';
import { Recipe } from '../shared/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private _recipes: { [key: number]: Recipe } = {
    0: new Recipe(0,
      'Schnitzel',
      '1st recipe',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient().assign({ name: 'Meat', amount: 1 }),
        new Ingredient().assign({ name: 'French Fries', amount: 20 }),
      ]
    ),
    1: new Recipe(1,
      'Burger',
      '2nd recipe',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient().assign({ name: 'Bread', amount: 2 }),
        new Ingredient().assign({ name: 'Meat', amount: 1 }),
      ]
      ,
    ),
  };

  constructor(private _slService: ShoppingListService) {

  }

  get recipes() {
    return Object.keys(this._recipes).map(k => this._recipes[k]);
  }

  getRecipe(id: number) {
    return this._recipes[id];
  }

  addIngredients2ShoppingList(ingredients: Ingredient[]) {
    this._slService.addIngredients(ingredients);
  }
}
