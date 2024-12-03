const express = require('express');
const five = require('johnny-five');
const app = express();
const cors = require('cors');
const { Board, Led } = require("johnny-five");

app.use(cors({
  origin: 'http://localhost:8100'  // O usa '*' para permitir solicitudes de todos los orígenes
}));

let led; // Declarar la variable para el LED fuera del evento "ready"
let consumoAcumuladoWh = 0; // Variable para almacenar el consumo acumulado

// Crear el objeto board y conectar con el puerto correcto
const board = new Board({
  port: "COM8" // Cambia este puerto por el que corresponde en tu sistema
});

board.on("ready", function() {
  led = new Led(10); // Inicializar el LED en el pin 10 cuando el board esté listo
  console.log('Board listo');

  // Simular el aumento de consumo cada segundo
  setInterval(() => {
    consumoAcumuladoWh += Math.random() * 0.1;  // Simula el consumo aumentando de forma aleatoria
    console.log(`Consumo acumulado: ${consumoAcumuladoWh.toFixed(2)} Wh`);
  }, 1000); // Actualiza el consumo cada segundo
});

// Ruta para encender el LED
app.get('/light/led/on', (req, res) => {
  if (led) {
    led.on();  // Encender el LED
    console.log('LED encendido');
    res.status(200).send('LED encendido');
  } else {
    res.status(500).send('No se pudo encender el LED');
  }
});

// Ruta para apagar el LED
app.get('/light/led/off', (req, res) => {
  if (led) {
    led.off();  // Apagar el LED
    console.log('LED apagado');
    res.status(200).send('LED apagado');
  } else {
    res.status(500).send('No se pudo apagar el LED');
  }
});

// Ruta para obtener el consumo acumulado
app.get('/consumo', (req, res) => {
  // Responder con el consumo acumulado en formato JSON
  res.status(200).json({ consumoAcumuladoWh: consumoAcumuladoWh.toFixed(2) });
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
