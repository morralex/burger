// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************
require("dotenv").config();
// Require mysql
var mysql = require("mysql");

// Set up our connection information
var connection = mysql.createConnection({
  host: "",
  port: 3306,
  user: "root",
  password: process.env.burger_pw,
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

