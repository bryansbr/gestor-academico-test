const express = require('express');
const router = express.Router();


//Llamado al controlador
const {getAsignaturasProfesor} = require('../controllers/teacher.controllers');

//Esta ruta hace referencia a /api/teacher en app.js
router.route('/:id')
  .get(getAsignaturasProfesor)
  


module.exports = router;