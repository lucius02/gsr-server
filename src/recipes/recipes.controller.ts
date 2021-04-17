import { Controller, Get } from '@nestjs/common';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @Get()
  getRecipe() {
    return this.recipesService.getRecipe3();
  }

  getRecipe2() {
    return this.recipesService.getRecipe4();
  }
}
