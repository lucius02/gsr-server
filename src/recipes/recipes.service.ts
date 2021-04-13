import { Injectable } from '@nestjs/common';
import { Recipe } from "../models/recipe.modal";

@Injectable()
export class RecipesService {
  recipes: Recipe[] = [
    {
      recipe_id: 1,
      pdf_path: 'PDFpath1',
      popularity: 1,
      views: 1,
      preparation: 'preparation1',
      banner_image: 'Test',
      description: 'description1',
      read_time: '01:30:00',
      average_ranking: 1,
      likes: 500,
      title: 'recipeTest',
      step: 1,
      persons: 3,
      ingredients: 'test',
    },
  ];

  async getRecipes(): Promise<Recipe[]> {
    return this.recipes;
  }
}
