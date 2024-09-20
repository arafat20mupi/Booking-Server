const express = require('express');
const auth = require('../../middlewares/middlewares');
const { createBooking, getBooking } = require('./bookingController');
const route = express.Router();

// Create booking route
route.post('/create', auth, createBooking);

// Get bookings route 
route.get('/bookings', auth, getBooking); 

module.exports = route;
