import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private _recipeService: RecipeService,
              private _router: Router,
              private _route: ActivatedRoute) {
  }

  onAdd2ShoppingList() {
    this._recipeService.addIngredients2ShoppingList(this.recipe.ingredients);
  }

  ngOnInit() {
    this._route.params
      .subscribe((params: Params) => {
        const id = +params['id'];

        this.recipe = this._recipeService.getRecipe(id);
      });
  }

  onEdit() {
    // this._router.navigate(['../', this.recipe.id, 'edit'], {relativeTo: this._route});
    this._router.navigate(['edit'], { relativeTo: this._route });
  }

}
