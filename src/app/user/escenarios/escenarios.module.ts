import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscenariosPageRoutingModule } from './escenarios-routing.module';

import { EscenariosPage } from './escenarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscenariosPageRoutingModule
  ],
  declarations: [EscenariosPage]
})
export class EscenariosPageModule {}
