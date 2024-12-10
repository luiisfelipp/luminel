import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscenariosPage } from './escenarios.page';

const routes: Routes = [
  {
    path: 'escenarios',
    component: EscenariosPage, // La referencia al componente
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscenariosPageRoutingModule {}
