// SINGLETON
import { Component } from '@angular/core';
import { NetworkService } from '../../services/network-service';
import { IluminacionFacadeService } from 'src/app/services/iluminacion-facade.service';

@Component({
  selector: 'app-automatizacion',
  templateUrl: './automatizacion.page.html',
  styleUrls: ['./automatizacion.page.scss'],
})
export class AutomatizacionPage {
  wifiConfig: { ssid: string; password: string } | null = null;
  isActive: boolean = false;
  constructor() {
    // Obtener la instancia del Singleton
    const networkService = NetworkService.getInstance();

    // Configurar Wi-Fi
    networkService.setWifiConfig('MiRedWiFi', '12345');

    // Obtener la configuración guardada
    this.wifiConfig = networkService.getWifiConfig();
    console.log('Configuración actual:', this.wifiConfig);
  }
  toggleButton(): void {
    this.isActive = !this.isActive;
  }
}

// FACADE
// import { Component } from '@angular/core';
// import { IluminacionFacadeService } from 'src/app/services/iluminacion-facade.service';

// @Component({
//   selector: 'app-automatizacion',
//   templateUrl: './automatizacion.page.html',
//   styleUrls: ['./automatizacion.page.scss'],
// })
// export class AutomatizacionPage {
//   constructor(private iluminacionFacade: IluminacionFacadeService) {}

//   // Ejemplo: Cambiar a una escena
//   changeScene(scene: string): void {
//     this.iluminacionFacade.setScene(scene);
//   }

//   // Ejemplo: Encender todas las luces
//   turnOnLights(): void {
//     this.iluminacionFacade.turnOnAllLights();
//   }

//   // Ejemplo: Apagar todas las luces
//   turnOffLights(): void {
//     this.iluminacionFacade.turnOffAllLights();
//   }

//   // Ejemplo: Ajustar nivel de una luz
//   adjustLight(deviceId: string, level: number): void {
//     this.iluminacionFacade.adjustLightLevel(deviceId, level);
//   }
// }

