const express = require('express');
const router = express.Router();

const { getPersonById, getPersons, getAdminById, getAdmins,
    getProfessorById, getProfessors, getStudentById,
    getStudents, getCourseById, getCourses,
    getCareerById, getCareers, createPerson,
    createAdmin, createProfessor, createStudent, 
    createCareer, createCourse } = require('../controllers/admin.controllers');

// ========================== Rutas para obtener datos (Tipo GET) ==========================

// Rutas Personas
router.route('/personas/:id_persona')
    .get(getPersonById); 

router.route('/personas/')
    .get(getPersons);

// Rutas Administradores
router.route('/administradores/:id_adm')
    .get(getAdminById); 

router.route('/administradores/')
    .get(getAdmins);

// Rutas Profesores
router.route('/profesores/:id_profesor')
    .get(getProfessorById); 

router.route('/profesores')
    .get(getProfessors); 

// Rutas Estudiantes

// Rutas Asignaturas
router.route('/asignaturas/:id_asign')
    .get(getCourseById);

router.route('/asignaturas')
    .get(getCourses); 

// Rutas Programas Académicos
router.route('/programasAcademicos/:id_progr')
    .get(getCareerById);

router.route('/programasAcademicos')
    .get(getCourses);


//Rutas para crear datos (Insertar en tablas) (Tipo POST)
/*router.route('/crearPersona')
    .post(createPerson)

router.route('/crearProfesor')
    .post(createProfesor)

router.route('/crearEstudiante')
    .post(createEstudiante)

router.route('/crearAdministrador')
    .post(createAdministrador)

router.route('/crearPrograma')
    .post(createPrograma)

router.route('/crearAsignatura')
    .post(createAsignatura)


//Rutas para editar datos (Tipo PUT)    
router.route('/editPersona/:id')
    .put(editPersona)


router.route('/editPrograma/:id')
    .put(editPrograma)


router.route('/editAsignatura/:id')
    .put(editAsignatura)
*/

module.exports = router;