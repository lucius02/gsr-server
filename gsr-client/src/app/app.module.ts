import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ModalPageModule } from './home/modal/Modal.module';
import { CommonModule } from '@angular/common';
import { ThirdPipe } from './home/modal/third/third.pipe';

@NgModule({
  declarations: [AppComponent, ThirdPipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, ModalPageModule, CommonModule],
  providers: [ThirdPipe, StatusBar, SplashScreen, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
  exports: [
    ThirdPipe
  ]
})
export class AppModule {}
