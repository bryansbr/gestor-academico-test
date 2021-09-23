const express = require('express');
const router = express.Router();


//Llamado al controlador
const {getAsignaturasProfesor, getEstudiantesAsignatura, insertarNotaEstudiante, editarNotaEstudiante} = require('../controllers/teacher.controllers');

//Esta ruta hace referencia a /api/teacher en app.js
//Este metodo permite a un profesor ver sus asignaturas
router.route('/:id')
  .get(getAsignaturasProfesor)

//Ruta para que un profesor pueda ver sus estudiantes por asignatura
router.route('/misEstudiantesAsignatura/:id_asignatura&:id_profesor')
  .get(getEstudiantesAsignatura)  
  

//Ruta para que un profesor pueda insertar la nota de un estudiante por asignatura
router.route('/insertarNotaEstudiante')
  .post(insertarNotaEstudiante)


//Ruta para que un profesor pueda editar la nota de un estudiante por asignatura
router.route('/editarNotaEstudiante/:id_asignatura&:DocIdent')
 .put(editarNotaEstudiante)



module.exports = router;