import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { RecipesService } from '../../../services/recipes.service';
@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss']
})
export class SecondPage implements OnInit {
  recipes: Observable<any>;

  constructor(private modalController: ModalController,  private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }
  async closeModal() {
    await this.modalController.dismiss();
  }
}
