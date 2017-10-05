import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./tecipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private _recipes: Recipe[] = [
    new Recipe('Test 1', '1st recipe', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Test 2', '2nd recipe', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
  ];

  get recipes() {
    return this._recipes.slice(); // slice creates a copy of the array
  }

}
