import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { Observable } from 'rxjs';
import { ModalController, NavController, PopoverController } from '@ionic/angular';
import { ModalPage } from './modal/Modal.page';
import { SecondPage } from './modal/second/second.page';
import { recipe } from '../../../../src/models/recipe.modal';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  recipes: Observable<any>;

  constructor(private nav: NavController, private recipesService: RecipesService, public modalController: ModalController) {}

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }

  async openModal(){
    const modal = await this.modalController.create({
      component: SecondPage
    });
    return await modal.present();
  }
}
