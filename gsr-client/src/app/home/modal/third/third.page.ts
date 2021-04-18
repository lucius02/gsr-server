import { Component, OnInit, Pipe } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { RecipesService } from '../../../services/recipes.service';
import { RecipesService2 } from '../../../../../../src/recipes/recipes.service';
import { recipe } from '../../../../../../src/models/recipe.modal';

@Component({
  selector: 'app-third',
  templateUrl: './third.page.html',
  styleUrls: ['./third.page.scss'],
})
export class ThirdPage implements OnInit {
  recipes1: Promise<recipe[]>;

  constructor(private modalController: ModalController,  private recipesService2: RecipesService2) { }

  ngOnInit() {
    this.recipes1 = this.recipesService2.getRecipe4();
  }

  async closeModal() {
    await this.modalController.dismiss();
  }
}
