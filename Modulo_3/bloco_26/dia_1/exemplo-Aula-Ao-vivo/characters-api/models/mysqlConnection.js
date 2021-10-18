const mysql = require('mysql2/promise')

module.exports = mysql.createPool({
  host: "localhost",
  user: 'murilo',
  database: 'live_lecture_26_1',
  password: 'Murilo@01',
  port: 3306
})