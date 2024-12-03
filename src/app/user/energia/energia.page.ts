import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-energia',
  templateUrl: './energia.page.html',
  styleUrls: ['./energia.page.scss'],
})
export class EnergiaPage implements AfterViewInit {
  private chart: any; 
  consumoAcumuladoWh: number | null = null; // Total acumulado en Wh
  ipMKR = '192.168.1.2:3000'; // Dirección IP del MKR
  intervalId: any; // Intervalo para actualización periódica
  dataPoints: { time: string; consumo: number }[] = []; // Datos para el gráfico

  constructor(private router: Router, private http: HttpClient) {
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    this.iniciarActualizacion();
    this.loadChart();
  }

  iniciarActualizacion() {
    this.intervalId = setInterval(() => {
      this.obtenerConsumo();
    }, 10000); // Actualiza cada 10 segundos
  }

  detenerActualizacion() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  obtenerConsumo() {
    const url = `http://${this.ipMKR}/consumo`;
    this.http.get<{ consumoAcumuladoWh: number }>(url).subscribe({
      next: (data) => {
        if (data.consumoAcumuladoWh >= 0) {
          this.consumoAcumuladoWh = data.consumoAcumuladoWh;
          this.agregarPuntoAlGrafico(data.consumoAcumuladoWh);
        } else {
          console.warn('Dato inválido recibido del MKR:', data);
        }
      },
      error: (err) => {
        console.error('Error al conectar con el MKR:', err);
      },
    });
  }

  agregarPuntoAlGrafico(consumo: number) {
    const currentTime = new Date().toLocaleTimeString();
    this.dataPoints.push({ time: currentTime, consumo });

    if (this.dataPoints.length > 20) {
      this.dataPoints.shift();
    }

    this.actualizarGrafico();
  }

  loadChart() {
    const ctx = document.getElementById('energyChart') as HTMLCanvasElement;

    if (this.chart) {
      this.chart.destroy(); // Destruye el gráfico anterior
    }

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.dataPoints.map((p) => p.time),
        datasets: [
          {
            label: 'Consumo energético (Wh)',
            data: this.dataPoints.map((p) => p.consumo),
            borderColor: '#0b84f3',
            backgroundColor: 'rgba(11, 132, 243, 0.1)',
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              drawTicks: true,
              tickLength: 5,
              drawOnChartArea: true,
              lineWidth: 1,
              color: '#e5e5e5',
              tickBorderDash: [5, 5],
            },
          },
        },
      },
    });
  }

  actualizarGrafico() {
    if (this.chart) {
      this.chart.data.labels = this.dataPoints.map((p) => p.time);
      this.chart.data.datasets[0].data = this.dataPoints.map((p) => p.consumo);
      this.chart.update();
    }
  }

  ngOnDestroy() {
    this.detenerActualizacion();
    if (this.chart) {
      this.chart.destroy();
    }
  }

  onDeviceChange(event: any) {
    const deviceId = event.detail.value;
    console.log(`Dispositivo seleccionado: ${deviceId}`);
  }

  energia() {
    this.router.navigate(['/energia']);
  }

  control() {
    this.router.navigate(['/control-remoto']);
  }

  reportes() {
    this.router.navigate(['/reportes']);
  }

  ajustes() {
    this.router.navigate(['/ajustes']);
  }

  perfil() {
    this.router.navigate(['/perfil']);
  }
}