import { Injectable } from '@angular/core';
import { LightingSubject } from './lighting-subject';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EnergyService extends LightingSubject {
  private ipMKR = '192.168.206.53:3000';

  constructor(private http: HttpClient) {
    super();
  }

  fetchConsumption(): void {
    const url = `http://${this.ipMKR}/consumo`;
    this.http.get<{ consumoAcumuladoWh: number }>(url).subscribe({
      next: (data) => {
        if (data.consumoAcumuladoWh >= 0) {
          this.notifyObservers(`Nuevo consumo acumulado: ${data.consumoAcumuladoWh} Wh`);
        }
      },
      error: (err) => console.error('Error al conectar con el MKR:', err),
    });
  }
}
