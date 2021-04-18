import { Controller, Get } from '@nestjs/common';
import { RecipesService, RecipesService2 } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(
    private recipesService: RecipesService,
    private recipesService2: RecipesService2,
  ) {}

  @Get()
  getRecipe() {
    return this.recipesService.getRecipe3();
  }

  getRecipe2() {
    return this.recipesService2.getRecipe4();
  }
}
