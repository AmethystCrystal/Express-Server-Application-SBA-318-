const express = require('express');
const app = express();
const port = 2000;

const users = require('./routes/userRoutes');




app.listen(port, ()=>{
    console.log(`Server is listening on port: ${port}`);
  })
  