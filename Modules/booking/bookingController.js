const Booking = require('./BookingSchema');
const validateBooking = require('./validateBooking');

// Create Booking
exports.createBooking = async (req, res) => {
    const { data, purpose } = req.body;
    try {
        // Check if data and purpose are provided
        if (!data) {
            return res.status(400).json({ message: "Date is required" });
        }
        if (!purpose) {
            return res.status(400).json({ message: "Purpose is required" });
        }

        // Parse and format the date
        const parsedDate = new Date(data);
        if (isNaN(parsedDate.getTime())) {
            return res.status(400).json({ message: "Invalid date format" });
        }
        const formattedDate = parsedDate; // Save the parsed date for querying

        // Check if booking already exists for the same date
        const existingBooking = await Booking.findOne({ data: formattedDate });
        if (existingBooking) {
            return res.status(400).json({ message: 'Booking with this date already exists' });
        }

        // Validate booking data
        const { error } = validateBooking({ data, purpose });
        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        // Create new booking
        const booking = new Booking({
            user: req.user.id,
            data: formattedDate, // Use the validated date
            purpose
        });

        await booking.save();
        res.status(201).json(booking);

    } catch (error) {
        res.status(500).json({ error: error.message }); // Use 500 for server errors
    }
}

// Get Bookings
exports.getBooking = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.user.id });
        if (!bookings || bookings.length === 0) {
            return res.status(404).json({ message: "No bookings found" }); // 404 for not found
        }
        res.json(bookings);

    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
}
