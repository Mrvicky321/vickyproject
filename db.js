const mysql = require("mysql2");
const db = mysql.createConnection({

    host : "localhost",
    database : "collage",
    password : "",
    user : "root"

});

db.connect((error) => {
  if (error) {
    console.error(" Database connection error:", error.message);
    return;
  }
  console.log("✅ Database connected!");
});


module.exports = db;