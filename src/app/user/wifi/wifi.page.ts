import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wifi',
  templateUrl: './wifi.page.html',
  styleUrls: ['./wifi.page.scss'],
})
export class WifiPage implements OnInit {
  networks: string[] = [];

  constructor() {}

  ngOnInit() {
    // Simulamos la carga de redes Wi-Fi
    this.networks = ['Red-1', 'Red-2', 'Red-3'];
  }
}
