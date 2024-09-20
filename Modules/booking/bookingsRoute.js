const express = require('express');
const auth = require('../../middlewares/middlewares');
const { createBooking, getBooking } = require('./bookingController');
const route = express.Router();

//create booking route

route.post('/create-booking', auth, createBooking);

//get bookings route
route.post('/get-bookings',auth,getBooking);

module.exports= route;