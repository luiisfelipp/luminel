import { Observer } from './observer.interface';

export class LightingObserver implements Observer {
  constructor(private name: string) {}

  update(message: string): void {
    console.log(`${this.name} ha recibido la actualización: ${message}`);
  }
}
