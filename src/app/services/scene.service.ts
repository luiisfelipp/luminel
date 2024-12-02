import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SceneService {
  activateScene(sceneName: string): void {
    console.log(`Escena activada: ${sceneName}`);
    // Lógica para activar la escena
  }
}
