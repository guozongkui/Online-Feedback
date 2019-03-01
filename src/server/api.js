const mysql = require('mysql');
const mysqlConfig = require('./db');
const sqlMap = require('./sqlMap');

const pool = mysql.createPool({
  host: mysqlConfig.host,
  user: mysqlConfig.user,
  password: mysqlConfig.password,
  database: mysqlConfig.database,
  port: mysqlConfig.port,
  multipleStatements: true
});
