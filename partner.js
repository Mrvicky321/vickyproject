const express = require("express");//import
const db = require("./db")
const jwt = require("jsonwebtoken")
const multer = require("multer");
const bcrypt = require("bcrypt");
const path = require("path");
const app = express(); // object



//Get method

app.get("/api/userspartner", (request, response) => {
  db.query("SELECT * FROM partner", (error, results) => {
    if (error) {
      console.error("Database error:", error);
      return response.status(500).json({ message: "Server internal error" });
    }
    response.status(200).json(results); // return database
  });
});


//POST method to add a new user

app.post("/api/userspartner",(request,response)=>{
  const id = request.body.id;
  const name = request.body.name;
  const age  = request.body.age;

  db.query("INSERT INTO partner(name,age) VALUES (? , ?)",[name,age],(error,result)=>{
    response.status(201).json({id:result.insertId, id:id, name:name});
  });
})


app.listen(3500, () => {
  console.log("Server is running on 3500");
})