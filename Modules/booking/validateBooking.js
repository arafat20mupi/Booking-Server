const joi = require('joi');

const validateBooking = (booking) => {
    const schema = joi.object({
        date: joi.date().required(),  // Changed from "data" to "date" to match the schema
        purpose: joi.string().min(3).required(), // Added a minimum length for purpose
    });

    return schema.validate(booking);
};

module.exports = validateBooking;
