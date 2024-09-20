
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/dbConfig');
const app = express();

connectDB();

//Middleware
app.use(express.json());
  
//Home
app.get('/', (req, res) => {
  res.send("Server is okay")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
