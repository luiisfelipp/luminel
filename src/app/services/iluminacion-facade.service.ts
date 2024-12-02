import { Injectable } from '@angular/core';
import { SceneService } from './scene.service';
import { DeviceService } from './device.service';
import { LightingSubject } from './subject';

@Injectable({
  providedIn: 'root',
})
export class IluminacionFacadeService {
  private lightingSubject = new LightingSubject(); // Instancia del Subject
  private activeSceneKey = 'activeScene'; // Clave para almacenar la escena activa en el almacenamiento local

  constructor(
    private sceneService: SceneService,
    private deviceService: DeviceService
  ) {}

  // Cambiar a una escena
  setScene(sceneName: string): void {
    console.log(`Cambiando a la escena: ${sceneName}`);
    localStorage.setItem(this.activeSceneKey, sceneName); // Guardar la escena activa en localStorage
    this.sceneService.activateScene(sceneName);
    this.lightingSubject.notifyObservers(`Escena cambiada a: ${sceneName}`); // Notificar a los observadores
  }

  // Obtener la escena activa
  getActiveScene(): string {
    return localStorage.getItem(this.activeSceneKey) || 'default';  // Devuelve 'default' si no hay escena guardada
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

  // Método para activar el modo "relax"
  activateRelaxMode(): void {
    console.log('Activando modo Relax');
    this.deviceService.toggleAllDevices(true); // Asegura que las luces estén encendidas
    this.deviceService.setAllDevicesLevel(50); // Ajustar todas las luces al 50% de brillo
    this.lightingSubject.notifyObservers('Modo Relax activado: brillo ajustado a 50%');
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
