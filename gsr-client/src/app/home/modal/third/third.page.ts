import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { RecipesService } from '../../../services/recipes.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.page.html',
  styleUrls: ['./third.page.scss']
})
export class ThirdPage implements OnInit {
  recipes2: Observable<any>;

  constructor(private modalController: ModalController,  private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipes2 = this.recipesService.getRecipes();
  }
  async closeModal() {
    await this.modalController.dismiss();
  }
}
