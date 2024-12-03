import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnergiaPageRoutingModule } from './energia-routing.module';

import { EnergiaPage } from './energia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnergiaPageRoutingModule
  ],
  declarations: [EnergiaPage]
})
export class EnergiaPageModule {}
