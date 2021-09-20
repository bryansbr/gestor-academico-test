// Conexión a MySQL
const mysqlConnection = require('../databases/driverMySql');

//Controladores para acciones de rol administrador en MySQL
const adminCtrl = { }; // Todo se almacena en un objeto JSON

//Este método selecciona solo un administrador de la base de datos
adminCtrl.getAdmin = async (req, res) => {  // Obtenemos error, filas y campos de la tabla
	const { id } = req.params;
	await mysqlConnection.query(
		'SELECT * FROM persona INNER JOIN administrador ON ' +
		'persona.id_persona = administrador.id_persona WHERE administrador.id_persona = ?',
	    [id],
		(err, rows, fields) => {
      	if (!err) {
          	res.json(rows[0]); // Retorna un arreglo JSON en la posición 0 porque solo obtiene un administrador. 
      	}
      	else{
         	console.log("Ha ocurrido un error: =====> " + err);
      	}
  	});
}

//Este metodo selecciona TODOS los administradores de la base de datos
adminCtrl.getAdmins = async (req, res) => {  // Obtenemos error, filas y campos de la tabla
	await mysqlConnection.query(
		'SELECT * FROM persona',
		//'SELECT * FROM persona INNER JOIN administrador ON persona.id_persona = administrador.id_persona',
		(err, rows, fields) => {
		if (!err) {
			res.json(rows); // Retorna un arreglo de objetos con los administradores.
		}
		else{
			console.log("Ha ocurrido un error: =====> " + err);
		}
	});
}

// **********************
//Este metodo selecciona TODAS las personas de la base de datos
adminCtrl.getPersons = async (req, res) => {  // Obtenemos error, filas y campos de la tabla
	await mysqlConnection.query(
		'SELECT * FROM persona',
		(err, rows, fields) => {
		if (!err) {
			res.json(rows); // Retorna un arreglo de objetos con todas las personas.
		}
		else{
			console.log("Ha ocurrido un error: =====> " + err);
		}
	});
}
// **********************

// Este método permite crear una persona en la tabla 'Persona'

adminCtrl.createPerson = async (req, res) => {
	const { id_persona, nombre, apellido, fech_nac, correo, direccion,
		    celular, genero, nacionalidad, nom_usuario, contrasena,
			creado_en, id_profesor, profesion, id_adm } = req.body;
	await mysqlConnection.query(
		'INSERT INTO persona VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
		[id_persona, nombre, apellido, fech_nac, correo, direccion,
		celular, genero, nacionalidad, nom_usuario, contrasena,
		creado_en, id_profesor, profesion, id_adm],
		(err, rows, fields) => {
			if (!err) async() => {
				res.json({message: "¡Persona guardada exitosamente!"});
			}
			else {
				console.error("Error al crear persona en tabla 'Persona' =====> " + err);
			}
		}
	);
}

//Este metodo crea un profesor en la tabla 'Profesor'
adminCtrl.createProfessor = async (req, res) => {  
	const { id_persona, nombre, apellido, fech_nac, correo, direccion,
		    celular, genero, nacionalidad, nom_usuario, contrasena,
			creado_en, id_profesor, profesion, id_adm } = req.body;
	await mysqlConnection.query(
		'INSERT INTO persona VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
		[id_persona, nombre, apellido, fech_nac, correo, direccion,
		celular, genero, nacionalidad, nom_usuario, contrasena, creado_en],
		(err, rows, fields) => {
			if (!err) async() => {
				//const {  id_profesor, profesion, id_adm } = req.body;	
				await mysqlConnection.query(
					'INSERT INTO profesor VALUES (?, ?, ?, ?)',
					[id_persona, id_profesor, profesion, id_adm],
					(err, rows, fields) => {
						if (!err) {
							res.json({message: "Profesor(a) guardado(a)"});
						}
						else {
							console.log("Error al crear profesor en tabla 'Persona' =====> " + err);
						}	
					}
				);		 
		 			res.json({message: "¡Profesor guardado exitosamente!"});
				}
			else {
				console.log("Error al crear profesor en tabla 'Profesor' =====> " + err);
			}
		}
	);
}

module.exports = adminCtrl;