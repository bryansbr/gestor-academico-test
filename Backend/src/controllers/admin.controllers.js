
//conexión a mysql
const mysqlConnection = require('../databases/driverMySql');



//Controladors para acciones de rol administrador en mysql
const adminCtrl = {};

//Este método selecciona solo un administrador de la base de datos
adminCtrl.getAdmin = async (req, res) => {  //obtenemos error, filas y campos de la tabla
	const {id} = req.params;
	await mysqlConnection.query(
		'SELECT * FROM persona INNER JOIN administrador ON'+
		' persona.DocIdent = administrador.DocIdent WHERE administrador.DocIdent = ?',
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
		'SELECT * FROM persona INNER JOIN administrador ON persona.DocIdent = administrador.DocIdent'
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
	const {DocIdent, nombre, apellido, genero, fechaNac, nacionalidad, 
		  direccion, celular, correoElectronico, id_admin, profesion} = req.body;
		await mysqlConnection.query(
		'INSERT INTO persona values (?, ?, ?, ?, ?, ?, ?, ?, ?) ',
		[DocIdent, nombre, apellido, genero, fechaNac, nacionalidad, 
			direccion, celular, correoElectronico]
		, (err, rows, fields) => {
		if(!err)async() =>{	
			await mysqlConnection.query(
				'INSERT INTO profesor values (?, ?, ?) ',
					 [DocIdent, id_admin, profesion]
					 , (err, rows, fields) => {
					 if(!err){
						 res.json({message: "saved profesor"});
					 }
					 else{
						 console.log("=====> WError profesor en tabla persona" + err);
					 };
				
					}
			);		 
		 	res.json({message: "saved"});
		}
		else{
			console.log("=====> Error profesor en tabla profesor" + err);
		};
	});
	
};



module.exports = adminCtrl;