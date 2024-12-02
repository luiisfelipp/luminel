import { Component } from '@angular/core';

@Component({
  selector: 'app-iluminacion',
  templateUrl: './iluminacion.page.html',
  styleUrls: ['./iluminacion.page.scss'],
})
export class IluminacionPage {
  rooms = [
    { name: 'Living', status: 'Apagado', icon: 'bulb-outline', brightness: 0 },
    { name: 'Cocina', status: 'Apagado', icon: 'bulb-outline', brightness: 0 },
    { name: 'Baño', status: 'Apagado', icon: 'bulb-outline', brightness: 0 },
    { name: 'Habitación Principal', status: 'Apagado', icon: 'bulb-outline', brightness: 0 },
  ];

  turnAllOn() {
    this.rooms.forEach((room) => {
      room.status = 'Encendido';
      room.icon = 'bulb';
      room.brightness = 100;
    });
  }

  turnAllOff() {
    this.rooms.forEach((room) => {
      room.status = 'Apagado';
      room.icon = 'bulb-outline';
      room.brightness = 0;
    });
  }

  updateBrightness(room: any) {
    room.status = room.brightness > 0 ? 'Encendido' : 'Apagado';
    room.icon = room.brightness > 0 ? 'bulb' : 'bulb-outline';
  }
}
