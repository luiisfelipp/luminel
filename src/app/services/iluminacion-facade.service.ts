import { Injectable } from '@angular/core';
import { SceneService } from './scene.service';
import { DeviceService } from './device.service';
import { LightingSubject } from './subject';

@Injectable({
  providedIn: 'root',
})
export class IluminacionFacadeService {
  private lightingSubject = new LightingSubject(); // Instancia del Subject

  constructor(
    private sceneService: SceneService,
    private deviceService: DeviceService
  ) {}

  // Cambiar a una escena
  setScene(sceneName: string): void {
    console.log(`Cambiando a la escena: ${sceneName}`);
    this.sceneService.activateScene(sceneName);
    this.lightingSubject.notifyObservers(`Escena cambiada a: ${sceneName}`); // Notificar a los observadores
  }

  // Encender todas las luces
  turnOnAllLights(): void {
    console.log('Encendiendo todas las luces...');
    this.deviceService.toggleAllDevices(true); // Asegúrate de que este método esté correctamente definido en DeviceService
    this.lightingSubject.notifyObservers('Todas las luces encendidas'); // Notificar a los observadores
  }

  // Apagar todas las luces
  turnOffAllLights(): void {
    console.log('Apagando todas las luces...');
    this.deviceService.toggleAllDevices(false); // Asegúrate de que este método esté correctamente definido en DeviceService
    this.lightingSubject.notifyObservers('Todas las luces apagadas'); // Notificar a los observadores
  }

  // Ajustar la luz de un dispositivo específico
  adjustLightLevel(deviceId: string, level: number): void {
    console.log(`Ajustando dispositivo ${deviceId} al nivel ${level}`);
    this.deviceService.setDeviceLevel(deviceId, level); // Asegúrate de que este método esté correctamente definido en DeviceService
    this.lightingSubject.notifyObservers(`Nivel de luz ajustado en dispositivo ${deviceId} a ${level}`); // Notificar a los observadores
  }

  // Método para agregar un Observer
  addObserver(observer: any): void {
    this.lightingSubject.addObserver(observer);
  }

  // Método para eliminar un Observer
  removeObserver(observer: any): void {
    this.lightingSubject.removeObserver(observer);
  }
}
