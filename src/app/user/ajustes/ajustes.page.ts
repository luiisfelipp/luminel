import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage {
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(private toastController: ToastController) {}

  async changePassword() {
    if (!this.currentPassword || !this.newPassword || !this.confirmPassword) {
      this.presentToast('Por favor, completa todos los campos.');
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      this.presentToast('La nueva contraseña y la confirmación no coinciden.');
      return;
    }

    // Lógica para cambiar contraseña (simulada)
    console.log('Contraseña cambiada exitosamente');
    this.presentToast('¡Contraseña actualizada con éxito!');
    this.resetFields();
  }

  contactSupport() {
    // Simula un correo de soporte
    window.location.href = 'mailto:support@luminel.com';
  }

  resetFields() {
    this.currentPassword = '';
    this.newPassword = '';
    this.confirmPassword = '';
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
      color: 'primary',
    });
    toast.present();
  }
}
