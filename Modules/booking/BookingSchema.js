const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema(
    {
       user: {
         type: mongoose.Schema.Types.ObjectId,
         required: true
       } ,
       data:{
        type: Date,
        required: true,
        unique: true
       },
       purpose:{
        type:String,
        required: true,
       },
       status:{
        type:String,
        default:'pending'
       }

    },{
        timestamps: true,
    }
)

module.exports = mongoose.model('Booking',BookingSchema);