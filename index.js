const express = require('express');
const connectDB = require('./config/dbConfig');
const BookingRoute = require('./Modules/booking/bookingsRoute');
require('dotenv').config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Register Routes
app.use('/api/bookings', BookingRoute); // Ensure this is correctly defined

// Home route
app.get('/', (req, res) => {
  res.send("Server is okay");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
