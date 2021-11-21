const express = require('express');
const router = express.Router();


//Llamado al controlador
const {getNotasEstudiante, getNotaEstudiante, getAsignaturas} = require('../controllers/student.controllers');

//Esta ruta hace referencia a /api/teacher en app.js
//Este metodo permite a un profesor ver sus asignaturas
router.route('/misNotas/:id_estudiante')
  .get(getNotasEstudiante)

//Ruta para que un profesor pueda ver sus estudiantes por asignatura
router.route('/miNota/:id_asignatura&:id_estudiante')
  .get(getNotaEstudiante)  


//Ruta para que un profesor pueda ver sus estudiantes por asignatura
router.route('/misAsignaturas/:id_estudiante')
  .get(getAsignaturas)   
  

module.exports = router;