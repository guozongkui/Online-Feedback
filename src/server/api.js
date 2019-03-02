const mysql = require('mysql');
const dbConfig = require('./db');
const sqlMap = require('./sqlMap');

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true
});

module.exports = {
  feedback(req, res, next) { 
    pool.query('', function (err, results, fields) {
      if (err) {
        console.log(err);
        return;
      }
      res.json(results);
    });
  }
}

