// services/dispositivo.service.ts

import { Injectable } from '@angular/core';
import { DispositivoFactory } from './dispositivo-factory';
import { Dispositivo } from './dispositivo.model';

@Injectable({
  providedIn: 'root',
})
export class DispositivoService {
  private dispositivos: Dispositivo[] = [];

  agregarDispositivo(tipo: string, id: string, nombre: string): void {
    const dispositivo = DispositivoFactory.crearDispositivo(tipo, id, nombre);
    this.dispositivos.push(dispositivo);
    console.log(`Dispositivo agregado: ${nombre} (${tipo})`);
  }

  operarDispositivos(): void {
    this.dispositivos.forEach((dispositivo) => dispositivo.operar());
  }
}
