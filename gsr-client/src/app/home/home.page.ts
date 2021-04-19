import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SecondPage } from './modal/second/second.page';
import { Observable } from 'rxjs';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  recipes1: Observable<any>;


  constructor(private modalController: ModalController,  private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipes1 = this.recipesService.getRecipes();
  }

  async openModal(){
    const modal = await this.modalController.create({
      component: SecondPage
    });
    return await modal.present();
  }

  async openModal2(){
    const modal = await this.modalController.create({
      // @ts-ignore
      component: ThirdPage
    });
    return await modal.present();
  }
}
