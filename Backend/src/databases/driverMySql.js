const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root@localhost',
  password: '',
  database: 'u_calle'
});
mysqlConnection.connect((err) => {
  if (err) throw err;
  console.log('MySQL =========> ¡Conexión exitosa!');
});

module.exports = mysqlConnection;