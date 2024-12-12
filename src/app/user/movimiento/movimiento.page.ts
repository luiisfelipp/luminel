import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movimiento',
  templateUrl: './movimiento.page.html',
  styleUrls: ['./movimiento.page.scss'],
})
export class MovimientoPage implements OnInit {

    sections = [
      { title: 'Living', status: 'Sin presencia' },
      { title: 'Cocina', status: 'Sin presencia' },
      { title: 'Baño', status: 'Sin presencia' },
      { title: 'Habitación principal', status: 'Sin presencia' },
    ];
  

  constructor() { }

  ngOnInit() {
  }

}
