import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../tecipe.model";
import {RecipeService} from "../../recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private _recipeService: RecipeService) {
  }

  onSelected() {
    this._recipeService.recipeSelected.emit(this.recipe);
  }

  ngOnInit() {
  }

}
