import { Dispositivo, Luz, SensorMovimiento, Termostato } from './dispositivo.model';

export class DispositivoFactory {
  static crearDispositivo(tipo: string, id: string, nombre: string): Dispositivo {
    switch (tipo.toLowerCase()) {
      case 'luz':
        return new Luz(id, nombre);
      case 'sensormovimiento':
        return new SensorMovimiento(id, nombre);
      case 'termostato':
        return new Termostato(id, nombre);
      default:
        throw new Error(`Tipo de dispositivo desconocido: ${tipo}`);
    }
  }
}
