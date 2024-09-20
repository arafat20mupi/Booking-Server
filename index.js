
const express = require('express');
const connectDB = require('./config/dbConfig');
require('dotenv').config();
const bookingsRoute = require('./Modules/booking/bookingsRoute');
// middleware
const app = express();

connectDB();

//Middleware
app.use(express.json());

//Routes

app.use('/api/bookings', bookingsRoute);



//Home
app.get('/', (req, res) => {
  res.send("Server is okay")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
