import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escenarios',
  templateUrl: './escenarios.page.html',
  styleUrls: ['./escenarios.page.scss'],
})
export class EscenariosPage {
  activeScene: string = 'night';

  setActiveScene(scene: string): void {
    this.activeScene = scene;
    console.log('Escena activa:', this.activeScene);
  }
}

