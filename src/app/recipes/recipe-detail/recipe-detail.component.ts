import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../tecipe.model";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private _recipeService: RecipeService) {
  }

  onAdd2ShoppingList() {
    this._recipeService.addIngredients2ShoppingList(this.recipe.ingredients);
  }

  ngOnInit() {
  }

}
