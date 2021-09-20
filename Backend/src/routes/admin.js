const express = require('express');
const router = express.Router();

//llamnado controlador
const {getAdmins, getAdmin, getPersons, createProfessor, createPerson} = require('../controllers/admin.controllers');

//Esta ruta hace referencia a /api/admin en app.js

router.route('/')
    .get(getAdmins); 

router.route('/:id')
    .get(getAdmin);
    
router.route('personas')
    .get(getPersons);

router.route('/crearProfesor')
    .post(createProfessor);

router.route('/crearPersona')
    .post(createPerson);

module.exports = router;