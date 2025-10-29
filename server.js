
const express = require("express");//import
const db = require("./db")
const jwt = require("jsonwebtoken")
const multer = require("multer");
const bcrypt = require("bcrypt");
const path = require("path");
const app = express(); // object



app.use(express.json()); // adding middle ware
const storage = multer.diskStorage({
    destination:"./profileImages",
    filename:(request, file,  cb)=>{
        cb(null, Date.now() + path.extname(file.originalname) );
    }
})
const upload = multer({storage: storage});

app.use("/profileImages", express.static("profileImages")) // for allowing image by url=http://127.0.0.1:3000/profileImages/1761380677453.png

app.post("/api/user/profile", upload.single("profilePic"),(req,res)=>{
    if(!req.file){
        
        res.status(400).json({
            message: "Please upload profile pic or select"
        });
    }else{
        const filename = req.file.path;
        const id = req.body.id;
        //  db.query("UPDATE users SET profilePic=? WHERE id=?",[filename, id] ,(eror, result)=>{
        //     console.log(eror);
        // if(eror) return response.status(500).json({message : "Server internal error" + eror});
        // response.status(201).json({id: result.insertId, name : name, email: email});
        // });
        res.status(200).json({
            message: "Profile pic uploaded"
        });
    }
});

// password hashing -register
// app.post("/api/user", async (reqest, response)=> {
//     const name = reqest.body.name;
//     const email = reqest.body.email;
//     const password = reqest.body.password;
//     const passwordHash =await bcrypt.hash(password, 10) // 2 ka power 10 standard 
//         db.query("INSERT INTO users(name, email, password) VALUES (? , ?, ?)",[name, email,passwordHash] ,(eror, result)=>{
//             console.log(eror);
//         if(eror) return response.status(500).json({message : "Server internal error" + eror});
//         response.status(201).json({id: result.insertId, name : name, email: email});

//     } );
// });
//2 user

// const users = [];

app.get("/api/users", (request, response) => {
  db.query("SELECT * FROM users", (error, results) => {
    if (error) {
      console.error("Database error:", error);
      return response.status(500).json({ message: "Server internal error" });
    }
    response.status(200).json(results); // return database
  });
});


//POST method to add a new user

app.post("/api/users",(request,response)=>{
  const uId = request.body.id;
  const uName = request.body.name;
  const uEmail  = request.body.email;

  db.query("INSERT INTO users(name,email) VALUES (? , ?)",[uName,uEmail],(error,result)=>{
    response.status(201).json({id:result.insertId, id:uId, email:uEmail});
  });
})



//UPDATE method 

app.put("/api/users/:id",(response,request)=>{
  const uName = request.body.name;
  const uEmail = request.body.email;
  const uId = request.body.id;
jr
|
  db.query("UPDATE users SET name =?, email =? WHERE id =?",[uName,uEmail,uId],(error,result)=>{
    if(error) return response.status(500).json({message:"Server internal error"+error})
      response.status(200).json({message:"DATA UPDATED SUCCESSFULLY",name:uName,email:uEmail});
  });
})




// DELETE user
app.delete("/api/users/:id", (require, response)=> {
  const id = require.params.id;
  db.query("DELETE FROM users WHERE id =?",[id],(error,result)=>{
    if(error)return res.status(500).json({message :"Server internal error" + error});
    response.status(200).json({message : "users deleted succesfully"});
  });
});






// //Register
// app.post("/api/user/register",async(request,response)=>{
//   const name= request.body.name;
//   const email = request.body.email;
//   const password = request.body.password;
//   const hashPassword = await bcrypt.hash("" +password +"",10)
//   console.log(hashPassword)
//   db.query("INSERT INTO users(name,email,password) VALUES (?,?,?)",[name,email,hashPassword],(error,result)=>{
//     if(error)response.status(500).json({message:"Server internal error"})
//       response.status(201).json({id:result.insertId, name:name,email:email})
//   });
// });


//Login

// app.post("/api/users/login", async(request,response)=>{
//   const email = request.body.email;
//   const password = request.body.password;
//   console.log(email + " " + password)
//   db.query("SELECT * FROM users WHERE email=?",[email],async(error,result)=>{

//     if(error)return response.status(500).json({message: "Server internal error"+error});
//     //console.log(error);
//     console.log(result);
//     const dbPassword = result[0].password;
//     const isPasswordSame = await bcrypt.compare(""+password+"",""+dbPassword+"");
//     if(isPasswordSame){
//       response.status(200).json({message:"Login Successfully"})
//     }
//     else{
//       response.status(400).json({message:"Login faild"})
//     }
//   });
// });



// Get token 

// app.get("/users",(request,response)=>{
//     const token = request.headers.authorization;
//     const secretkey = "dfhfjfhfjjf75b";
//     jwt.verify(token, secretkey,(error, result)=>{
//         if(error){
//             response.status(400).json({massage: "unauthorized"})
//         }
//         else{
//             response.status(200).json({result})
//         }
//     })
// })



//token login
// Hash Password Login.....

// app.post("/users/login",async(request,response)=>{
//     const email = request.body.email;
//     const password = request.body.password;

//     db.query("SELECT * FORM users WHERE email=?",[email],async(error, result)=>{
//         if(error) return response.status(500).json({massage : "Server internal error"});
//         const dbPassword = result[0].password;
//         const name = result[0].name;
//         const email = result[0].email;
//         const isPasswordSame = await bcrypt.compare(password,dbPassword);
//         if(isPasswordSame){
//             const secretkey = "dfhfjfhfjjf75b";
//             const token = jwt.sign({name:name,email:email},secretkey,{expiresIn:"1h"});  //token

//             response.status(200).json({massage: "Login Success", token : token})
//         }
//         else{
//             response.status(200).json({massage: "Login failed"})
//         }

//     });
// })








app.listen(3500, () => {
  console.log("Server is running on 3500");
})