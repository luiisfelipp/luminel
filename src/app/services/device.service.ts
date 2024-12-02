import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  toggleAllDevices(state: boolean): void {
    console.log(`Todas las luces ${state ? 'encendidas' : 'apagadas'}`);
    // Lógica para encender/apagar todos los dispositivos
  }

  setDeviceLevel(deviceId: string, level: number): void {
    console.log(`Nivel del dispositivo ${deviceId} ajustado a ${level}`);
    // Lógica para ajustar el nivel del dispositivo
  }
}
