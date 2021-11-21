const express = require('express');
const router = express.Router();

const {getUsers, getUser, createUsers} = require('../controllers/users.controllers');

//Esta ruta hace referencia a /api/student en app.js
router.route('/')
  .get(getUsers) //se llama desde el controlador.Esto genera orden
  .post(createUsers)

router.route('/:id')
  .get(getUser)


//Exportando modulo
module.exports = router;