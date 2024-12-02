import { Subject } from 'rxjs';

export class LightingSubject {
  private observers: any[] = [];

  // Agregar un observador
  addObserver(observer: any): void {
    this.observers.push(observer);
  }

  // Eliminar un observador
  removeObserver(observer: any): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  // Notificar a los observadores sobre el cambio
  notifyObservers(message: string): void {
    for (let observer of this.observers) {
      observer.update(message);
    }
  }
}
