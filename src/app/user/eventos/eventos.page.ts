import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage {
  activationDays = [
    { label: 'lu', selected: false },
    { label: 'ma', selected: false },
    { label: 'mi', selected: false },
    { label: 'ju', selected: false },
    { label: 'vi', selected: false },
    { label: 'sá', selected: false },
    { label: 'do', selected: false },
  ];

  deactivationDays = [
    { label: 'lu', selected: false },
    { label: 'ma', selected: false },
    { label: 'mi', selected: false },
    { label: 'ju', selected: false },
    { label: 'vi', selected: false },
    { label: 'sá', selected: false },
    { label: 'do', selected: false },
  ];

  activationTime: string = '09:00';
  deactivationTime: string = '21:00';

  // Variables para almacenar la información seleccionada
  selectedActivationDay: string = '';
  selectedDeactivationDay: string = '';
  selectedActivationTime: string = '';
  selectedDeactivationTime: string = '';

   // Cambios para mostrar los valores seleccionados al finalizar
   onFinish(): void {
    this.selectedActivationDay = this.activationDays.find((day) => day.selected)?.label || 'Ninguno';
    this.selectedDeactivationDay = this.deactivationDays.find((day) => day.selected)?.label || 'Ninguno';
    this.selectedActivationTime = this.activationTime;
    this.selectedDeactivationTime = this.deactivationTime;
  }

  constructor() {}

  toggleActivationDay(day: any): void {
     // Desactiva todos los días en el grupo de activación
     this.activationDays.forEach((d) => (d.selected = false));
     // Activa solo el día seleccionado
     day.selected = true;
    }
    /**
   * Selecciona un día en el grupo de desactivación y desactiva los demás.
   * @param day Día seleccionado.
   */

  toggleDeactivationDay(day: any): void {
    // Desactiva todos los días en el grupo de desactivación
    this.deactivationDays.forEach((d) => (d.selected = false));
    // Activa solo el día seleccionado
    day.selected = true;
  }

  onActivationTimeChange(event: any): void {
    this.activationTime = event.detail.value;
    console.log('Hora de activación:', this.activationTime);
  }
   /**
   * Maneja el cambio en la hora de desactivación.
   * @param event Evento de cambio de hora.
   */

  onDeactivationTimeChange(event: any): void {
    this.deactivationTime = event.detail.value;
    console.log('Hora de desactivación:', this.deactivationTime);
  }
}