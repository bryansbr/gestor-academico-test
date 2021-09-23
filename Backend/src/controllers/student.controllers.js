//conexión a mysql
const mysqlConnection = require('../databases/driverMySql');

//Controladors para acciones de rol administrador en mysql
const studentCtrl = {};

//Este método selecciona una nota de estudiante por asignatura
studentCtrl.getNotaEstudiante= async (req, res) => {  //obtenemos error, filas y campos de la tabla
	const {id_asignatura, id_estudiante} = req.params;
	await mysqlConnection.query(
		'SELECT asignaturas.Nombre_Asignatura, notas_asignatura.Nota FROM '+
    '(notas_asignatura INNER JOIN asignaturas ON notas_asignatura.Id_Asignatura = asignaturas.Id_Asignatura)'+
    ' WHERE notas_asignatura.Id_Asignatura = 10001 AND notas_asignatura.DocIdent = 23423456',
	    [id_asignatura, id_estudiante], (err, rows, fields)=> {
      	if(!err){
          	res.json(rows[0]);//retorna un arreglo. 
      	}
      	else{
         	console.log("=====> " + err);
      	};
  	});
};

//Este método selecciona las notas de un estudiante en sus asuignaturas
studentCtrl.getNotasEstudiante= async (req, res) => {  //obtenemos error, filas y campos de la tabla
	const {id_estudiante} = req.params;
	await mysqlConnection.query(
		'SELECT asignaturas.Nombre_Asignatura, notas_asignatura.Nota FROM '+
    '(notas_asignatura INNER JOIN asignaturas ON notas_asignatura.Id_Asignatura = asignaturas.Id_Asignatura)'+
    ' WHERE notas_asignatura.DocIdent = ?',
	    [id_estudiante], (err, rows, fields)=> {
      	if(!err){
          	res.json(rows);//retorna un arreglo. 
      	}
      	else{
         	console.log("=====> " + err);
      	};
  	});
};


//Este método selecciona las notas de un estudiante en sus asuignaturas
studentCtrl.getAsignaturas= async (req, res) => {  //obtenemos error, filas y campos de la tabla
	const {id_estudiante} = req.params;
	await mysqlConnection.query(
		'SELECT asignaturas.Nombre_Asignatura FROM '+
    '(((matriculado INNER JOIN estudiante ON matriculado.DocIdent = estudiante.DocIdent) '+
    'INNER JOIN programas ON matriculado.Id_programa = programas.Id_programa) '+
    'INNER JOIN asignaturas ON asignaturas.Id_programa = programas.Id_programa) WHERE estudiante.DocIdent = ?',
	    [id_estudiante], (err, rows, fields)=> {
      	if(!err){
          	res.json(rows);//retorna un arreglo. 
      	}
      	else{
         	console.log("=====> " + err);
      	};
  	});
};

//query de información de programa va a ser en mongodb


module.exports = studentCtrl;