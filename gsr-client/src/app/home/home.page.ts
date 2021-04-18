import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SecondPage } from './modal/second/second.page';
import { ThirdPage } from './modal/third/third.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(public modalController: ModalController) {}

  ngOnInit() {
  }

  async openModal(){
    const modal = await this.modalController.create({
      component: SecondPage
    });
    return await modal.present();
  }

  async openModal2(){
    const modal = await this.modalController.create({
      component: ThirdPage
    });
    return await modal.present();
  }
}
