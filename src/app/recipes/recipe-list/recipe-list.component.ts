import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a test", "https://www.foodandwine.com/thmb/nDBGGuZzVOHIUkLT_fWorNv3nS8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Tamarind-Chicken-FT-RECIPE0522-80072d93f7bc4bc7abf1dcf5b5317b0c.jpg"),
    new Recipe("A Test Recipe", "This is simply a test", "https://www.foodandwine.com/thmb/nDBGGuZzVOHIUkLT_fWorNv3nS8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Tamarind-Chicken-FT-RECIPE0522-80072d93f7bc4bc7abf1dcf5b5317b0c.jpg")

  ];
  constructor() {

  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  ngOnInit() {

  }
}
