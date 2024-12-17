// models/dispositivo.model.ts

export abstract class Dispositivo {
    constructor(public id: string, public nombre: string) {}
  
    abstract operar(): void;
  }
  
  export class Luz extends Dispositivo {
    operar(): void {
      console.log(`Encendiendo la luz: ${this.nombre}`);
    }
  }
  
  export class SensorMovimiento extends Dispositivo {
    operar(): void {
      console.log(`Detectando movimiento con el sensor: ${this.nombre}`);
    }
  }
  
  export class Termostato extends Dispositivo {
    operar(): void {
      console.log(`Ajustando temperatura con el termostato: ${this.nombre}`);
    }
  }
  