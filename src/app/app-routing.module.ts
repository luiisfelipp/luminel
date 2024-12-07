import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EscenariosPageModule } from './user/escenarios/escenarios.module';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./user/wifi/wifi.module').then(m => m.WifiPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./user/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'wifi',
    loadChildren: () => import('./user/wifi/wifi.module').then( m => m.WifiPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'controllers',
    loadChildren: () => import('./controllers/controllers.module').then( m => m.ControllersPageModule)
  },
  {
    path: 'models',
    loadChildren: () => import('./models/models.module').then( m => m.ModelsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./user/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'escenarios',
    loadChildren: () => import('./user/escenarios/escenarios.module').then( m => m.EscenariosPageModule)
  },
  {
    path: 'iluminacion',
    loadChildren: () => import('./user/iluminacion/iluminacion.module').then( m => m.IluminacionPageModule)
  },
  {
    path: 'automatizacion',
    loadChildren: () => import('./user/automatizacion/automatizacion.module').then( m => m.AutomatizacionPageModule)
  },
  {
    path: 'energia',
    loadChildren: () => import('./user/energia/energia.module').then( m => m.EnergiaPageModule)
  },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    EscenariosPageModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
