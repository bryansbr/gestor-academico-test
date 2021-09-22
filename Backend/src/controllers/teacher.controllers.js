
//conexión a mysql
const mysqlConnection = require('../databases/driverMySql');

//Controladors para acciones de rol administrador en mysql
const teacherCtrl = {};

//Este método selecciona las asignaturas que dicta un profesor
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

//Este método selecciona los estudiantes por asignatura de un profesor
teacherCtrl.getEstudiantesAsignatura = async (req, res) => {  //obtenemos error, filas y campos de la tabla
	const { id_asignatura, id_profesor} = req.params;
	await mysqlConnection.query(
		'SELECT persona.DocIdent, persona.nombre, persona.apellido FROM '+
		'(((((profesor INNER JOIN asignado ON profesor.DocIdent = asignado.DocIdent) '+
		'INNER JOIN asignaturas ON asignado.Id_Asignatura = asignaturas.Id_Asignatura) '+
		'INNER JOIN programas ON asignaturas.Id_programa = programas.Id_programa) '+
		'INNER JOIN matriculado ON programas.Id_programa = matriculado.Id_programa) '+
		'INNER JOIN persona ON matriculado.DocIdent = persona.DocIdent) '+
		'WHERE asignaturas.Id_Asignatura = ? AND profesor.Docident = ?;',
	    [id_asignatura, id_profesor], (err, rows, fields)=> {
      	if(!err){
          	res.json(rows);//retorna un arreglo. 
      	}
      	else{
         	console.log("=====> " + err);
      	};
  	});
};

//Este método inserta la nota de un estudiante en una asignatura
teacherCtrl.insertarNotaEstudiante = async (req, res) => {  //obtenemos error, filas y campos de la tabla
	const { id_asignatura, nota, id_estudiante} = req.body;
	await mysqlConnection.query(
		'INSERT INTO notas_asignatura VALUES(?, ?, ?) ',
	    [id_asignatura, nota, id_estudiante], (err, rows, fields)=> {
      	if(!err){
          	res.json({message:200});//retorna un arreglo. 
      	}
      	else{
         	console.log("=====> " + err);
      	};
  	});
};

//Este método inserta la nota de un estudiante en una asignatura
teacherCtrl.editarNotaEstudiante = async (req, res) => {  //obtenemos error, filas y campos de la tabla
	const { id_asignatura, DocIdent} = req.params;
	const {nota} = req.body;
	await mysqlConnection.query(
		'UPDATE notas_asignatura SET nota = ?  WHERE id_asignatura = ? AND DocIdent = ?;',
	    [nota, id_asignatura, DocIdent], (err, rows, fields)=> {
      	if(!err){
          	res.json({message:200});//retorna un arreglo. 
      	}
      	else{
         	console.log("=====> " + err);
      	};
  	});
};


module.exports = teacherCtrl;