import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-escenarios',
  templateUrl: './escenarios.page.html',
  styleUrls: ['./escenarios.page.scss'],
  encapsulation: ViewEncapsulation.None //Esto es por la propiedad que está en global SCSS
})

export class EscenariosPage {
  activeScene: string = 'night';

  setActiveScene(scene: string): void {
    this.activeScene = scene;
    console.log('Escena activa:', this.activeScene);
  }
  
}

