import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { Observable } from 'rxjs';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  recipes: Observable<any>;
  constructor(private recipesService: RecipesService, public modalCtrl: ModalController) {}

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
}
