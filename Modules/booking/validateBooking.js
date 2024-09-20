const joi = require('joi');

const validateBooking = (booking) => {
    const schema = joi.object({
        data: joi.date().required(), 
        purpose: joi.string().required(), 
    });

    return schema.validate(booking);
};

module.exports = validateBooking;