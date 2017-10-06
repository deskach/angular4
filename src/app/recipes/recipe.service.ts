import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./tecipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private _recipes: Recipe[] = [
    new Recipe('Schnitzel',
      '1st recipe',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        Ingredient.createInstance('Meat', 1),
        Ingredient.createInstance('French Fries', 20),
      ]
    ),
    new Recipe('Burger',
      '2nd recipe',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        Ingredient.createInstance('Bread', 2),
        Ingredient.createInstance('Meat', 1),
      ]
    ),
  ];

  constructor(private _slService: ShoppingListService) {

  }

  get recipes() {
    return this._recipes.slice(); // slice creates a copy of the array
  }

  addIngredients2ShoppingList(ingredients: Ingredient[]) {
    this._slService.addIngredients(ingredients);
  }
}
