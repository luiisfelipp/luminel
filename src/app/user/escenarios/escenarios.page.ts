import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IluminacionFacadeService } from '../../services/iluminacion-facade.service';

@Component({
  selector: 'app-escenarios',
  templateUrl: './escenarios.page.html',
  styleUrls: ['./escenarios.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EscenariosPage implements OnInit {
  activeScene?: string;

  constructor(private iluminacionFacade: IluminacionFacadeService) {}

  ngOnInit() {
    // Recupera la escena previamente seleccionada o establece "night" por defecto
    this.activeScene = this.iluminacionFacade.getActiveScene();
    console.log('Escena activa al cargar:', this.activeScene);
  }

  setActiveScene(scene: string): void {
    this.activeScene = scene;
    console.log('Escena activa:', this.activeScene);

    // Llamamos al Facade para cambiar la escena
    this.iluminacionFacade.setScene(scene);

    if (scene === 'relax') {
      this.iluminacionFacade.activateRelaxMode();
    } else {
      this.iluminacionFacade.setScene(scene); // Llamada general para otras escenas
    }
  }
  addNewScene() {
    console.log('Agregar nueva escena');
    // Aquí puedes abrir un modal o redirigir a una pantalla de creación de escenas.
  }
  
  
}
