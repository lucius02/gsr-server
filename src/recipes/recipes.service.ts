import { Injectable } from '@nestjs/common';
import { recipe } from '../models/recipe.modal';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable({})
export class RecipesService {
  constructor(
    @InjectRepository(recipe) private recipesRepository: Repository<recipe>,
  ) {}

  async getRecipe3(): Promise<recipe[]> {
    return this.recipesRepository.find({ recipe_id: 3 });
  }
  async getRecipe4(): Promise<recipe[]> {
    return this.recipesRepository.find({ recipe_id: 4 });
  }
}
