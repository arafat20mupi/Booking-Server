const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Explicitly referencing the User model
      required: true
    },
    date: { // Changed from "data" to "date"
      type: Date,
      required: true,
      unique: true // Ensure this is the desired behavior
    },
    purpose: {
      type: String,
      required: true
    },
    status: {
      type: String,
      default: 'pending'
    }
  },
  {
    timestamps: true, // Automatically creates createdAt and updatedAt fields
  }
);

module.exports = mongoose.model('Booking', BookingSchema);
