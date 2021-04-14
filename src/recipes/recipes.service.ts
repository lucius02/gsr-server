import { Injectable } from '@nestjs/common';
import { Recipe } from '../models/recipe.modal';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable({})
export class RecipesService {
  constructor(
    @InjectRepository(Recipe) private recipesRepository: Repository<Recipe>,
  ) {}

  async getRecipes(): Promise<Recipe[]> {
    return this.recipesRepository.find({ isDeleted: false });
  }
}
