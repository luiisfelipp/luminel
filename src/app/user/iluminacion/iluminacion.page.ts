import { Component, OnInit } from '@angular/core';
import { IluminacionFacadeService } from '../../services/iluminacion-facade.service';  // Asegúrate de que el servicio esté correctamente importado

@Component({
  selector: 'app-iluminacion',
  templateUrl: './iluminacion.page.html',
  styleUrls: ['./iluminacion.page.scss'],
})
export class IluminacionPage implements OnInit {
  rooms = [
    { name: 'Living', status: 'Apagado', icon: 'bulb-outline', brightness: 0 },
    { name: 'Cocina', status: 'Apagado', icon: 'bulb-outline', brightness: 0 },
    { name: 'Baño', status: 'Apagado', icon: 'bulb-outline', brightness: 0 },
    { name: 'Habitación Principal', status: 'Apagado', icon: 'bulb-outline', brightness: 0 },
  ];
  activeScene?: string;

  constructor(private iluminacionFacade: IluminacionFacadeService) {}

  ngOnInit() {
    // Registrar como observador
  this.iluminacionFacade.addObserver((message: string) => {
    console.log('Notificación recibida:', message);
    // Aquí puedes manejar la actualización de la UI basada en el mensaje
  });
    // Recuperar la escena activa desde el facade
    this.activeScene = this.iluminacionFacade.getActiveScene();
    console.log('Escena activa al cargar:', this.activeScene);

    // Si la escena es "relax", activamos ese modo automáticamente al cargar la página
    if (this.activeScene === 'relax') {
      this.iluminacionFacade.activateRelaxMode();
      this.updateRoomStatesForRelaxMode();
    } else {
      // Aquí puedes manejar otros modos si es necesario
    }
  }

  // Método para encender todas las luces
  turnAllOn() {
    console.log('Encendiendo todas las luces desde el componente...');
    this.iluminacionFacade.turnOnAllLights(); // Llamar al método del Facade
    this.updateRoomStatesForAllLights();
  }
  

  // Método para apagar todas las luces
  turnAllOff() {
    this.rooms.forEach((room) => {
      room.status = 'Apagado';
      room.icon = 'bulb-outline';
      room.brightness = 0;
    });
    this.iluminacionFacade.turnOffAllLights(); // Llamar al método del facade para apagar todas las luces
  }

  // Actualizar el brillo de una habitación específica
  updateBrightness(room: any) {
    room.status = room.brightness > 0 ? 'Encendido' : 'Apagado';
    room.icon = room.brightness > 0 ? 'bulb' : 'bulb-outline';
    this.iluminacionFacade.adjustLightLevel(room.name, room.brightness); // Ajustar el brillo de un dispositivo específico
  }

  // Actualizar el estado de las habitaciones al activar el modo "relax"
  private updateRoomStatesForRelaxMode() {
    this.rooms.forEach((room) => {
      room.status = 'Encendido';
      room.icon = 'bulb';
      room.brightness = 50;  // Ajustar todas las habitaciones al 50% de brillo en modo "relax"
      this.iluminacionFacade.adjustLightLevel(room.name, room.brightness);  // Ajustar el brillo de cada habitación
    });
  }

  private updateRoomStatesForAllLights() {
    this.rooms.forEach((room) => {
      room.status = 'Encendido';
      room.icon = 'bulb';
      room.brightness = 100;  // Si deseas ponerlas a un 100% de brillo, ajusta aquí
      this.iluminacionFacade.adjustLightLevel(room.name, room.brightness);  // Ajustar el brillo de cada habitación
    });
  }

  // Método para cambiar la escena activa desde el menú
  setActiveScene(scene: string) {
    this.activeScene = scene;
    this.iluminacionFacade.setScene(scene);  // Cambiar la escena a través del facade

    if (scene === 'relax') {
      this.iluminacionFacade.activateRelaxMode();
      this.updateRoomStatesForRelaxMode();  // Ajustar el brillo de las habitaciones al 50% en modo relax
    } else {
      this.iluminacionFacade.setScene(scene);  // Cambiar a otras escenas
    }
  }
}
