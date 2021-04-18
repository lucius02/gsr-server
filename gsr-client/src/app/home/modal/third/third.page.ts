import { Component, OnInit, Pipe } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { RecipesService } from '../../../services/recipes.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.page.html',
  styleUrls: ['./third.page.scss'],
})
export class ThirdPage implements OnInit {
  recipes1: Observable<any>;

  constructor(private modalController: ModalController,  private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes1 = this.recipesService.getRecipes();
  }

  async closeModal() {
    await this.modalController.dismiss();
  }
}
