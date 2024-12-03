import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnergiaPage } from './energia.page';

const routes: Routes = [
  {
    path: '',
    component: EnergiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnergiaPageRoutingModule {}
