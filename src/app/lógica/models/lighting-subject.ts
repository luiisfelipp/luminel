import { Observer } from './observer.interface';

export class LightingSubject {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(message: string): void {
    for (const observer of this.observers) {
      observer.update(message);
    }
  }
}
