import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';


@Injectable()
export class RecipeService {
  
  private recipes: Recipe[] = [
    new Recipe("A Test Recipe 1", 
      "This is simply a test", 
      "https://www.foodandwine.com/thmb/nDBGGuZzVOHIUkLT_fWorNv3nS8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Tamarind-Chicken-FT-RECIPE0522-80072d93f7bc4bc7abf1dcf5b5317b0c.jpg",
      [
        new Ingredient('Meat',1),
        new Ingredient('Stuff',1)
      ]),
    new Recipe("A Test Recipe 2", 
      "This is simply a test", 
      "https://cdn1.harryanddavid.com/wcsstore/HarryAndDavid/images/catalog/20_34160_30W_01ex.jpg?width=585&quality=85&auto=webp&auto=webp&optimize={medium}",
      [
        new Ingredient('Chicken',1),
        new Ingredient('Potatoes',1)

      ])
  ];
  constructor(private shoppingListService: ShoppingListService) { }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
  
}
