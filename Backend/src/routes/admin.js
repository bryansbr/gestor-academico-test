const express = require('express');
const router = express.Router();

const { getPersonById, getPersons, getAdminById, getAdmins,
    getProfessorById, getProfessors,getStudentById, getStudents,
    getCourseById, getCourses,getCareerById, getCareers,
    createPerson, createAdmin, createProfessor, createStudent,
    createCareer, createCourse, editPerson, editAdmin,
    editProfessor, editCareer, editCourse, deletePerson,
    deleteAdmin, deleteProfessor, deleteCareer, deleteCourse } = require('../controllers/admin.controllers');

// ========================== RUTAS PARA OBTENER DATOS (GET) ==========================

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

// ========================== RUTAS PARA CREAR DATOS (POST) ==========================
router.route('/asignaturas')
    .post(createCourse); 

    router.route('/profesores')
    .post(createProfessor); 
    


// ========================== RUTAS PARA CREAR DATOS (PUT) ==========================



// ========================== RUTAS PARA CREAR DATOS (DELETE) ==========================



module.exports = router;