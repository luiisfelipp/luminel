export class LightingObserver {
    constructor(private name: string) {}
  
    // Recibir actualizaciones
    update(message: string): void {
      console.log(`${this.name} ha recibido la actualización: ${message}`);
    }
  }
  