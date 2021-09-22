// Conexión a MySQL
const mysqlConnection = require('../databases/driverMySql');

// Controladores para acciones de rol administrador en MySQL
const adminCtrl = { };

// Este método selecciona SOLO UN administrador de la base de datos
adminCtrl.getAdmin = async (req, res) => {  // Obtenemos error, filas y campos de la tabla
	const { id } = req.params;
	await mysqlConnection.query(
		'SELECT * FROM persona INNER JOIN administrador ON '+
		'persona.id_persona = administrador.id_persona WHERE administrador.id_persona = ?',
	    [id], (err, rows, fields) => {
      	if (!err) {
          	res.json(rows[0]); // Retorna un arreglo de tipo JSON en la primera posición con el administrador. 
      	}
      	else {
         	console.log("=====> Ha ocurrido un error: " + err);
      	}
  	});
}

// Este metodo selecciona TODOS los administradores de la base de datos
adminCtrl.getAdmins = async (req, res) => {  // Obtenemos error, filas y campos de la tabla
	mysqlConnection.query(
		//'SELECT * FROM persona',
		'SELECT * FROM persona INNER JOIN administrador ON persona.id_persona = administrador.id_persona',
		(err, rows, fields) => {
			if (!err) {
				res.json(rows); // Retorna un JSON con todos los administradores. 
			}
			else {
				console.log("=====> Ha ocurrido un error obteniendo Administradores: " + err);
			}
		}
	);
}

adminCtrl.getPerson = async(req, res) => {
	mysqlConnection.query(
		'SELECT * FROM persona',
		(err, rows, fields) => {
			if (!err) {
				res.json(rows); // Retorna un JSON con TODAS las personas de la BD.
			}
			else {
				console.log("=====> Ha ocurrido un error obteniendo Personas: " + err);
			}
		}
	);
}

//Este metodo crea una persona en la tabla persona
adminCtrl.createPerson = async (req, res) => {  
	const { id_persona, nombre, apellido, fech_nac, correo,
			direccion, celular, genero, nacionalidad,
			nom_usuario, contrasena, creado_en } = req.body;
	await mysqlConnection.query(
		'INSERT INTO persona VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ',
		[id_persona, nombre, apellido, fech_nac, correo,
		direccion, celular, genero, nacionalidad,
		nom_usuario, contrasena, creado_en], 
		(err, rows, fields) => {
		if (!err) {
			console.log("¡Persona creada exitosamente!")	
		 	res.json({message: 200});
		}
		else {
			console.log("=====> Error profesor en tabla profesor" + err);
		}
	});
}


//Este metodo Crea un profesor en la tabla profesor
adminCtrl.createProfesor = async (req, res) => {  
	const {id_persona, id_admin, profesion} = req.body;
	await mysqlConnection.query(
		'INSERT INTO profesor values (?, ?, ?) ',
			 [id_persona, id_admin, profesion]
			 , (err, rows, fields) => {
			 if(!err){
				 res.json({message: "saved profesor"});
			 }
			 else{
				 console.log("=====> Error en crear profesor" + err);
			 };
		
			}
	);		 
};

//Este metodo Crea un estudianteen la tabla estudiante
adminCtrl.createEstudiante = async (req, res) => {  
	const {id_persona} = req.body;
	await mysqlConnection.query(
		'INSERT INTO estudiante values (?) ',
			 [id_persona]
			 , (err, rows, fields) => {
			 if(!err){
				 res.json({message: 200});
			 }
			 else{
				 console.log("=====> Error en crear estudiante" + err);
			 };
		}
	);		 
};


//Este metodo Crea un administrador en la tabla administrador
adminCtrl.createAdministrador = async (req, res) => {  
	const {id_persona, permissions_delete} = req.body;
	await mysqlConnection.query(
		'INSERT INTO estudiante values (?, ?) ',
			 [id_persona, permissions_delete]
			 , (err, rows, fields) => {
			 if(!err){
				 res.json({message: "saved Estudiante"});
			 }
			 else{
				 console.log("=====> Error en crear estudiante" + err);
			 };
		}
	);		 
};


//Este metodo Crea un programa en la tabla programa
adminCtrl.createPrograma = async (req, res) => {  
	const {id_programa, name_programa} = req.body;
	await mysqlConnection.query(
		'INSERT INTO programa values (?, ?) ',
			 [id_programa, name_programa]
			 , (err, rows, fields) => {
			 if(!err){
				 res.json({message: "saved programa"});
			 }
			 else{
				 console.log("=====> Error en crear programa" + err);
			 };
		}
	);		 
};


//Este metodo Crea una asignatura en la tabla asignatura
adminCtrl.createAsignatura = async (req, res) => {  
	const {id_asignatura, name_asignatura, id_programa} = req.body;
	await mysqlConnection.query(
		'INSERT INTO programa values (?, ?) ',
			 [id_asignatura, name_asignatura, id_programa]
			 , (err, rows, fields) => {
			 if(!err){
				 res.json({message: "saved Asignatura"});
			 }
			 else{
				 console.log("=====> Error en crear Asignatura" + err);
			 };
		}
	);		 
};


//Este metodo edita una persona en la tabla personaa
adminCtrl.editPersona = async (req, res) => {
	const{id} = req.params  
	const {nombre, apellido, genero, fechaNac, nacionalidad, 
		direccion, celular, correoElectronico	} = req.body;
	await mysqlConnection.query(
		'UPDATE persona SET nombre = ?, apellido = ?, genero = ?, fechaNac = ?, nacionalidad = ?, '+
		'direccion = ?, celular = ?, correoElectronico = ?  WHERE id_persona = ?;',
			 [nombre, apellido, genero, fechaNac, nacionalidad, 
				direccion, celular, correoElectronico, id]
			 , (err, rows, fields) => {
			 if(!err){
				 res.json({message:200});
			 }
			 else{
				 console.log("=====> Error en editar persona" + err);
			 };
		}
	);		 
};

//Este metodo edita un programa en  la tabla programas
adminCtrl.editPrograma = async (req, res) => {
	const{id} = req.params  
	const {nombre_programa} = req.body;
	await mysqlConnection.query(
		'UPDATE programas SET nombre_programa = ?  WHERE id_programa = ?;',
			 [nombre_programa, id]
			 , (err, rows, fields) => {
			 if(!err){
				 res.json({message:200});
			 }
			 else{
				 console.log("=====> Error en editar programa" + err);
			 };
		}
	);		 
};

//Este metodo editar una asignatura en la tabla asignaturas
adminCtrl.editAsignatura = async (req, res) => {
	const{id} = req.params  
	const {nombre_asignatura} = req.body;
	await mysqlConnection.query(
		'UPDATE asignaturas SET nombre_asignatura = ?  WHERE id_asignatura = ?;',
			 [nombre_asignatura, id]
			 , (err, rows, fields) => {
			 if(!err){
				 res.json({message:200});
			 }
			 else{
				 console.log("=====> Error en editar asignatura" + err);
			 };
		}
	);		 
};


module.exports = adminCtrl;