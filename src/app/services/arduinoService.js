const controlLight = async (room, action) => {
    console.log(`Room: ${room}, Action: ${action}`);
    // Lógica para enviar comando al Arduino según la habitación y acción
    // Puedes usar librerías como `axios` si necesitas enviar solicitudes HTTP al Arduino
    return `Comando ${action} enviado a ${room}`;
  };
 
  module.exports = {
    controlLight,
  };
 
