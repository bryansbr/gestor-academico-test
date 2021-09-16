
//conexión a mysql
const mysqlConnection = require('../databases/driverMySql');

//Controladors para acciones de rol administrador en mysql
const adminCtrl = {};

//Este método selecciona solo un administrador de la base de datos
adminCtrl.getAdmin = async (req, res) => {  //obtenemos error, filas y campos de la tabla
	const {id} = req.params;
	await mysqlConnection.query(
		'SELECT * FROM persona INNER JOIN administrador ON'+
		' persona.id_persona = administrador.id_persona WHERE administrador.id_persona = ?',
	    [id], (err, rows, fields)=> {
      	if(!err){
          	res.json(rows[0]);//retorna un arreglo. 
      	}
      	else{
         	console.log("=====> " + err);
      	};
  	});
};

//Este metodo selecciona todos los administradores de la base de datos
adminCtrl.getAdmins = async (req, res) => {  //obtenemos error, filas y campos de la tabla
	mysqlConnection.query(
		'SELECT * FROM persona INNER JOIN administrador ON persona.id_persona = administrador.id_persona'
		, (err, rows, fields)=> {
		if(!err){
			res.json(rows);
		}
		else{
			console.log("=====> " + err);
		};
	});
};

//Este metodo Crea un profesor
adminCtrl.createProfesor = async (req, res) => {  
	const {id_persona, nombre, apellido, fech_nac, correo, direccion, celular, 	genero, 
		nacionalidad, nom_usuario, contrasena, creado_en, id_profesor, profesion, id_adm} = req.body;
		await mysqlConnection.query(
		'INSERT INTO persona values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
		[id_persona, nombre, apellido, fech_nac, correo, direccion, celular, 	genero, 
			nacionalidad, nom_usuario, contrasena, creado_en, id_profesor, profesion, id_adm]
			, (err, rows, fields) => {
		if(!err) async() =>{	
			await mysqlConnection.query(
				'INSERT INTO profesor values (?, ?, ?, ?) ',
					 [id_persona, id_profesor, profesion, id_adm]
					 , (err, rows, fields) => {
					 if(!err){
						 res.json({message: "Profesor(a) guardado(a)"});
					 }
					 else{
						 console.log("=====> Error profesor en tabla persona" + err);
					 };
				
					}
			);		 
		 	res.json({message: "Guardado"});
		}
		else{
			console.log("=====> Error profesor en tabla profesor" + err);
		};
	});
	
};

module.exports = adminCtrl;