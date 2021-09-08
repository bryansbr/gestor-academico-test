
//conexión a mysql
const mysqlConnection = require('../databases/driverMySql');

//Controladors para acciones de rol administrador en mysql
const teacherCtrl = {};

//Este método selecciona solo un administrador de la base de datos
teacherCtrl.getAsignaturasProfesor = async (req, res) => {  //obtenemos error, filas y campos de la tabla
	const {id} = req.params;
	await mysqlConnection.query(
		'SELECT profesor.DocIdent, asignado.Id_Asignatura, asignaturas.Nombre_Asignatura '+
    'FROM ((profesor INNER JOIN asignado ON profesor.DocIdent = asignado.DocIdent) '+
    'INNER JOIN asignaturas ON asignado.Id_Asignatura = asignaturas.Id_Asignatura) '+
    'WHERE profesor.DocIdent = ?;',
	    [id], (err, rows, fields)=> {
      	if(!err){
          	res.json(rows);//retorna un arreglo. 
      	}
      	else{
         	console.log("=====> " + err);
      	};
  	});
};





module.exports = teacherCtrl;