import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FindBusPage } from './find-bus.page';
import { FindBusService } from './find-bus.service';
import {HttpClientModule} from '@angular/common/http';
import { SharedModule } from '../../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: FindBusPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    SharedModule.forRoot()
  ],
  declarations: [FindBusPage],
  providers: [
    FindBusService,
  ],
})
export class FindBusPageModule {}
