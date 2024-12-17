const arduinoService = require('../services/arduinoService');


const controlLight = async (req, res) => {
  const { room, action } = req.params;


  try {
    const result = await arduinoService.controlLight(room, action);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


module.exports = {
  controlLight,
};



