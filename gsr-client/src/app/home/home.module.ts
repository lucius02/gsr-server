import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { SecondPage } from './modal/second/second.page';
import { HomePageRoutingModule } from './home-routing.module';
import { ThirdPage } from './modal/third/third.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, SecondPage, ThirdPage],
  entryComponents: [SecondPage, ThirdPage]
})
export class HomePageModule {}
