const express = require('express');
const app = express();
const port = 2000;

const bodyParser = require("body-parser");

const users = require('./data/users');
const bios = require('./data/bios');
const hobbies = require('./data/hobbies');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// ============= USERS ==================== //

// INDEX - GET Request - Getting all users
app.get("/web/users", (req, res)=>{
    res.json(users);
});

// CREATE - POST - create a user

// SHOW - GET Request - Getting one user
app.get("/web/users/:id", (req, res)=>{
 const user = users.find((u) => u.id == req.params.id);
  if (user) res.json(user);
});

//UPDATE - PUT/PATCH - update a user

//DELETE - DELETE - delete a user




// ============= HOBBIES ==================== //

// INDEX - GET Request - Getting all hobbies
app.get("/web/hobbies", (req, res)=>{
    res.json(hobbies);
});

// CREATE - POST - create a user

// SHOW - GET Request - Getting one user's hobbies
app.get("/web/hobbies/:id", (req, res, next)=>{
 const hobby = hobbies.find((h) => h.id == req.params.id);
  if (hobby) res.json(hobby);
  else next();
});

//UPDATE - PUT/PATCH - update a user

//DELETE - DELETE - delete a user


// ============= BIOS ==================== //

// INDEX - GET Request - Getting all user's bios
app.get("/web/bios", (req, res)=>{
    res.json(bios);
});

// CREATE - POST - create a user

// SHOW - GET Request - Getting one user's bio
app.get("/web/bios/:id", (req, res, next)=>{
 const bio = bios.find((b) => b.id == req.params.id);
  if (bio) res.json(bio);
  else next();
});

//UPDATE - PUT/PATCH - update a user

//DELETE - DELETE - delete a user


// Custom Middleware
app.use((req, res) => {
    res.status(404);
    res.json({ error: "Data Not Located" });
  });

app.listen(port, ()=>{
    console.log(`Server is listening on port: ${port}`);
  })
  