import { Injectable } from '@angular/core';
import { SceneService } from './scene.service';
import { DeviceService } from './device.service';
import { LightingSubject } from './lighting-subject';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class IluminacionFacadeService {
  private lightingSubject = new LightingSubject();
  private activeSceneKey = 'activeScene';
  private serverUrl = 'http://192.168.206.53';
  private isRequestInProgress = false; // Variable para controlar las solicitudes


  constructor(
    private http: HttpClient,
    private sceneService: SceneService,
    private deviceService: DeviceService
  ) {}


  // Cambiar a una escena
  setScene(sceneName: string): void {
    console.log(`Cambiando a la escena: ${sceneName}`);
    localStorage.setItem(this.activeSceneKey, sceneName);
    this.sceneService.activateScene(sceneName);
    this.lightingSubject.notifyObservers(`Escena cambiada a: ${sceneName}`);
  }


  // Obtener la escena activa
  getActiveScene(): string {
    return localStorage.getItem(this.activeSceneKey) || 'default';
  }


  // Encender todas las luces
  turnOnAllLights(): void {
    console.log('Llamada a turnAllOn()'); // Agrega esto para depurar
    if (this.isRequestInProgress) return; // Si ya hay una solicitud en progreso, no hacer nada


    this.isRequestInProgress = true; // Establecer la bandera a "en progreso"
    console.log('Encendiendo todas las luces...');
    this.http.get(`${this.serverUrl}/light/all/on`).subscribe({
      next: () => {
        this.deviceService.toggleAllDevices(true);
        this.lightingSubject.notifyObservers('Todas las luces encendidas');
        this.isRequestInProgress = false;
      },
      error: (err) => {
        console.error('Error al encender las luces:', err);
        this.isRequestInProgress = false;
      }
    });
    
  }


  // Apagar todas las luces
  turnOffAllLights(): void {
    if (this.isRequestInProgress) return; // Si ya hay una solicitud en progreso, no hacer nada


    this.isRequestInProgress = true;
    console.log('Apagando todas las luces...');
    this.http.get(`${this.serverUrl}/light/all/off`).subscribe(() => {
      this.deviceService.toggleAllDevices(false); // Alternativa local si falla la solicitud
      this.lightingSubject.notifyObservers('Todas las luces apagadas');
      this.isRequestInProgress = false; // Liberar la bandera cuando la solicitud termine
    });
  }


  // Ajustar la luz de un dispositivo específico
  adjustLightLevel(deviceId: string, level: number): void {
    if (this.isRequestInProgress) return; // Evitar solicitudes simultáneas


    this.isRequestInProgress = true;
    console.log(`Ajustando dispositivo ${deviceId} al nivel ${level}`);
    this.http.get(`${this.serverUrl}/light/${deviceId}/${level}`).subscribe(() => {
      this.deviceService.setDeviceLevel(deviceId, level); // Alternativa local si falla la solicitud
      this.lightingSubject.notifyObservers(
        `Nivel de luz ajustado en dispositivo ${deviceId} a ${level}`
      );
      this.isRequestInProgress = false;
    });
  }


  // Método para activar el modo "relax"
  activateRelaxMode(): void {
    if (this.isRequestInProgress) return;


    this.isRequestInProgress = true;
    console.log('Activando modo Relax');
    this.http.get(`${this.serverUrl}/light/relax`).subscribe(() => {
      this.deviceService.toggleAllDevices(true);
      this.deviceService.setAllDevicesLevel(50); // Ajustar todas las luces al 50% de brillo
      this.lightingSubject.notifyObservers('Modo Relax activado: brillo ajustado a 50%');
      this.isRequestInProgress = false;
    });
  }


  // Método para agregar un Observer
  addObserver(observer: any): void {
    this.lightingSubject.addObserver(observer);
  }


  // Método para eliminar un Observer
  removeObserver(observer: any): void {
    this.lightingSubject.removeObserver(observer);
  }

  //FUNCIÓN PARA PRENDER EL LED
  turnOnLed(): void {
    if (this.isRequestInProgress) return;
  
    this.isRequestInProgress = true;
    console.log('Encendiendo el LED...');
    this.http.get(`${this.serverUrl}/light/led/on`).subscribe(() => {
      this.lightingSubject.notifyObservers('LED encendido');
      this.isRequestInProgress = false;
    });
  }
  // Encender LED
  turnOffLed(): void {
    if (this.isRequestInProgress) return;
  
    this.isRequestInProgress = true;
    console.log('Apagando el LED...');
    this.http.get(`${this.serverUrl}/light/led/off`).subscribe(() => {
      this.lightingSubject.notifyObservers('LED apagado');
      this.isRequestInProgress = false;
    });
  }
  
}


  


