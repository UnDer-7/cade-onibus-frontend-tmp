import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MapsPage } from './maps.page';
import { AgmCoreModule } from '@agm/core';
import { MapsService } from './maps.service';
import { SharedModule } from '../../../shared/shared.module';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { Geolocation } from '@ionic-native/geolocation/ngx';

const routes: Routes = [
  {
    path: '',
    component: MapsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCuj1bd6vb0mHGIfvEoyj1_SgKk8HfWdVs'
    }),
    AgmSnazzyInfoWindowModule
  ],
  declarations: [MapsPage],
  providers: [
    MapsService,
    Geolocation
  ]
})
export class MapsPageModule {}
