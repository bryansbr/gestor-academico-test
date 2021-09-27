// Aquí se trae la conexión a MySQL.
const mysqlConnection = require('../databases/driverMySql');

// Controladores para acciones de rol administrador en MySQL.
const adminCtrl = { };

// ========================== MÉTODOS PARA LA OBTENCIÓN DE DATOS ==========================

// Este método, selecciona UNA persona por ID de la base de datos SQL.
adminCtrl.getPersonById = async(req, res) => {
	const { id_persona } = req.params;
	// Escriba aquí abajo su código.
	await mysqlConnection.query(
		'SELECT * FROM persona WHERE persona.id_persona = ?', // Escriba su consulta para obtener una persona por ID en la base de datos.
		[ id_persona ],
		(err, rows, fields) => {
			if (!err) {
				res.json(rows[0]) // Retorna un JSON en la primera posición con la persona. 
			}
			else {
				console.log('' + err); // Escriba su mensaje aquí.
			}
		}
	);
}

// Este método, selecciona TODAS las personas de la base de datos SQL.
adminCtrl.getPersons = (req, res) => {
	// Escriba aquí abajo su código.
	mysqlConnection.query(
		'SELECT * FROM persona', // Escriba su consulta para obtener todas las personas en la base de datos.
		(err, rows, fields) => {
			if (!err) {
				res.json(rows) // Retorna un JSON con todas las personas. 
			}
			else {
				console.log('' + err); // Escriba su mensaje aquí.
			}
		}
	);
}
// Este método selecciona UN administrador de la base de datos SQL.
adminCtrl.getAdminById = async (req, res) => {  // Obtenemos error, filas y campos de la tabla
	const { id_adm } = req.params;
	await mysqlConnection.query(
		'SELECT * FROM persona INNER JOIN administrador ON ' +
		'persona.id_persona = administrador.id_persona WHERE administrador.id_adm = ?',
	    [ id_adm ],
		(err, rows, fields) => {
			if (!err) {
          		res.json(rows[0]); // Retorna un JSON en la primera posición con el administrador. 
      		}
      		else {
         		console.log("=====> Ha ocurrido un error obteniendo al administrador: " + err);
      		}
		}
	);
}

// Este metodo selecciona TODOS los administradores de la base de datos SQL.
adminCtrl.getAdmins = async (req, res) => {  // Obtenemos error, filas y campos de la tabla.
	await mysqlConnection.query(
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

// GRUPO 1: Mariana, Aurimar, Rafael
// Este método, selecciona UN profesor por ID de la base de datos SQL.
adminCtrl.getProfessorById = async(req, res) => {
	const { id_profesor } = req.params;
	await mysqlConnection.query(
		'SELECT * FROM persona INNER JOIN profesor ON ' +
		'persona.id_persona = profesor.id_persona WHERE profesor.id_profesor = ?',
		[ id_profesor ],
		(err, rows, fields) => {
			if (!err) {
          		res.json(rows[0]); // Retorna un JSON en la primera posición con un profesor. 
      		}
      		else {
         		console.log("=====> Ha ocurrido un error obteniendo al profesor: " + err);
      		}
		}
	);
}

// Este método, selecciona TODOS los profesores de la base de datos SQL.
adminCtrl.getProfessors = async(req, res) => {
	// Escriba aquí abajo su código.
	await mysqlConnection.query(
		'SELECT * FROM persona INNER JOIN profesor ON persona.id_persona = profesor.id_persona',
		(err, rows, fields) => {
			if (!err) {
				res.json(rows); // Retorna un JSON con todos los profesores. 
			}
			else {
				console.log("=====> Ha ocurrido un error obteniendo Profesores: " + err);
			}
		}
	);
}

// GRUPO 2: Luis, Kimberly, Katerine
// Este método, selecciona UN estudiante por ID de la base de datos SQL.
adminCtrl.getStudentById = async(req, res) => {
	const { id_estudiante } = req.params;
	// Escriba aquí abajo su código.
	await mysqlConnection.query(

	);
}

// Este método, selecciona TODOS los estudiantes de la base de datos SQL.
adminCtrl.getStudents = async(req, res) => {
	// Escriba aquí abajo su código.
	await mysqlConnection.query(

	);
}

// GRUPO 3: Leidy, Juniyelitmar
// Este método, selecciona UNA asignatura por ID de la base de datos SQL.
adminCtrl.getCourseById = async(req, res) => {
	const { id_asign } = req.params;
	await mysqlConnection.query(
		'SELECT * FROM asignatura WHERE asignatura.id_asign = ?', 
		[ id_asign ],
		(err, rows, fields) => {
			if (!err) {
          		res.json(rows[0]); // Retorna un JSON en la primera posición con la asignatura. 
      		}
      		else {
         		console.log("=====> Ha ocurrido un error obteniendo la asignatura: " + err);
      		}
		}
	);
}

// Este método, selecciona TODAS las asignaturas de la base de datos SQL.
adminCtrl.getCourses = async(req, res) => {
	await mysqlConnection.query(
		'SELECT * FROM asignatura',
		(err, rows, fields) => {
			if (!err) {
				res.json(rows); // Retorna un JSON con todas las asignaturas. 
			}
			else {
				console.log("=====> Ha ocurrido un error obteniendo Asignaturas: " + err);
			}
		}
	);
}

// Grupo 4: José David
// Este método, selecciona UN programa académico por ID de la base de datos SQL.
adminCtrl.getCareerById = async(req, res) => {
	const { id_progr } = req.params;
	// Escriba aquí abajo su código.
	await mysqlConnection.query(
		'SELECT * FROM programa_academico WHERE programa_academico.id_progr = ?',
		[ id_progr ],
		(err, rows, fields) => {
			if (!err) {
				res.json(rows[0]); // Retorna un JSON con el programa academico.
			}
			else {
				console.log("=====> Ha ocurrido un error obteniendo el programa academico " + err);
			}
		}
	);
}

// Este método, selecciona TODOS los programas académicos de la base de datos SQL.
adminCtrl.getCareers = async(req, res) => {
	// Escriba aquí abajo su código.
	await mysqlConnection.query(
		'SELECT * FROM programa_academico',
		(err, rows, fields) => {
			if (!err) {
				res.json(rows); // Retorna un JSON con todos los programas academicos.
			}
			else {
				console.log("=====> Ha ocurrido un error obteniendo Programa Academicos" + err);
			}
		}
	);
}

// ========================== MÉTODOS PARA CREAR DATOS ==========================

// Este método, crea una persona en la base de datos SQL.
adminCtrl.createPerson = async(req, res) => {
	const { id_persona, nombre, apellido, fech_nac, correo, direccion, celular,
	genero, nacionalidad, nom_usuario, contrasena, creado_en } = req.body;
	// Escriba aquí abajo su código.
	await mysqlConnection.query(
		'INSERT INTO persona VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
		[id_persona, nombre, apellido, fech_nac, correo, direccion, celular,
		genero, nacionalidad, nom_usuario, contrasena, creado_en], 
		(err, rows, fields) => {
			if (!err) {
				console.log("¡Persona creada exitosamente!")	
				res.json({message: 200}); // Responde un 200 si la persona se creo exitosamente.
			}
			else {
				console.log("=====> Error creando persona: " + err);
			}
		}
	);
}

// Grupo 5: Victor, Isabella, Britney
// Este método, crea un administrador en la base de datos SQL.
adminCtrl.createAdmin = async(req, res) => {
	// Escriba aquí abajo su código.
	await mysqlConnection.query(

	);
}

// Grupo 6: Kevin, Valeria, Mónica
// Este método, crea una profesor en la base de datos SQL.
adminCtrl.createProfessor = async(req, res) => {
	// Escriba aquí abajo su código.
	await mysqlConnection.query(
		
	);
}

// Grupo 7: Diana, Flor
// Este método, crea un estudiante en la base de datos SQL.
adminCtrl.createStudent = async(req, res) => {
	// Escriba aquí abajo su código.
	await mysqlConnection.query(
		
	);
}

// Grupo 8: Legna, Elizabeth, Andres
// Este método, crea un programa académico en la base de datos SQL.
adminCtrl.createCareer = async(req, res) => {
	// Escriba aquí abajo su código.
	await mysqlConnection.query(
		
	);
}

// Grupo 9: 
// Este método, crea una asignatura en la base de datos SQL.
adminCtrl.createCourse = async(req, res) => {
	// Escriba aquí abajo su código.
	await mysqlConnection.query(
		
	);
}

// ========================== MÉTODOS PARA EDITAR DATOS ==========================

// Este metodo, edita una persona en la base de datos SQL.
adminCtrl.editPerson = async (req, res) => {
	const { id_persona } = req.params;
	const { nombre, apellido, fech_nac, correo, direccion, celular,
	genero, nacionalidad, nom_usuario, contrasena, creado_en } = req.body;
	await mysqlConnection.query(
		'UPDATE persona SET nombre = ?, apellido = ?, fech_nac = ?, correo = ? ' +
		'direccion = ?, celular = ?, genero = ?, nacionalidad = ?, nom_usuario = ?, ' +
		'contrasena = ?, creado_en = ? WHERE id_persona = ?',
		[ id_persona, nombre, apellido, fech_nac, correo, direccion, celular,
		genero, nacionalidad, nom_usuario, contrasena, creado_en ],
		(err, rows, fields) => {
			if (!err){
				res.json({message: 200}); // Responde un 200 si la persona se editó exitosamente.
			} 
			else {
				console.log("=====> Error al editar persona" + err);
			}
		}
	);		 
}

// Este metodo, edita una administrador en la base de datos SQL.
adminCtrl.editAdmin = async (req, res) => {
	// Escriba aquí abajo su código.
	await mysqlConnection.query(
		// // Escriba aquí abajo su el resto del código.
	);		 
}

//Este metodo edita un programa en  la tabla programas
adminCtrl.editPrograma = async (req, res) => {
	const{id} = req.params  
	const {nombre_programa} = req.body;
	await mysqlConnection.query(
		'UPDATE programas SET nombre_programa = ?  WHERE id_programa = ?;',
			 [nombre_programa, id]
			 , (err, rows, fields) => {
			 if(!err){
				 res.json({message: 200});
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

// ========================== MÉTODOS PARA ELIMINAR DATOS ==========================

module.exports = adminCtrl;