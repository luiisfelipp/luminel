const express = require('express');
const cors = require('cors'); // Habilitar CORS
const app = express();

// Middleware
app.use(cors()); // Permite todas las solicitudes de cualquier origen
app.use(express.json()); // Permite parsear el cuerpo de las solicitudes como JSON

// Variables globales
let ledState = "off";
let consumoAcumuladoWh = 50.45;

// Rutas
app.get('/light/led/on', (req, res) => {
  ledState = "on";
  console.log('LED encendido - Respuesta enviada al cliente');
  res.status(200).send('LED encendido');
});

app.get('/light/led/off', (req, res) => {
  ledState = "off";
  console.log('LED apagado - Respuesta enviada al cliente');
  res.status(200).send('LED apagado');
});

// Ruta para generar consumo aleatorio
app.get('/consumo', (req, res) => {
  // Generar un valor aleatorio para consumo acumulado
  consumoAcumuladoWh = Math.round(Math.random() * 100); 
  console.log(`Consumo generado: ${consumoAcumuladoWh} Wh`);
  
  res.status(200).json({ consumoAcumuladoWh });
});

// Manejador de rutas no encontradas (al final de todas las rutas definidas)
app.use((req, res) => {
  res.status(404).send('Ruta no encontrada.');
});

// Manejador de errores global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal en el servidor.');
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
