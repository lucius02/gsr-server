import { Injectable } from '@nestjs/common';
import { recipe } from '../models/recipe.modal';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable({})
export class RecipesService {
  constructor(
    @InjectRepository(recipe) private recipesRepository: Repository<recipe>,
  ) {}

  async getRecipes(): Promise<recipe[]> {
    return this.recipesRepository.find({ isDeleted: false });
  }
}
