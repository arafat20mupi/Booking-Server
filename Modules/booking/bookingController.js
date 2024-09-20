const Booking = require('./BookingSchema');
const validateBooking = require('./validateBooking');
//create booking
exports.createBooking = async (req, res) => {

    const { data, purpose } = req.body;
    try {
        if (!data && !purpose) {
            res.status(400).json({ message: "data or purpose is not found" });
        }

        // Parse and format the date
        let formattedDate;
        const parsedDate = new Date(data);
        // Check if the parsedDate is valid
        if (isNaN(parsedDate.getTime())) {
            return res.status(400).json({ message: "Invalid date format" });
        }
        const existingBooking = await Booking.findOne({ data: formattedDate });

        if (existingBooking) {
            return res.status(400).json({ message: 'Booking with this date already exists' });
        }
        const { error } = validateBooking({ data, purpose });

        if (error) {
        return res.status(400).send(error.details[0].message);
    
        }

        const booking = new Booking({
            user: req.user.id,
            data,
            purpose
        })
        // console.log(booking);
        await booking.save();
        res.status(201).json(booking);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
//get booking
exports.getBooking = async (req, res) => {
    try {

        const bookings = await Booking.find({ user: req.user.id });
        if (!bookings) {
            res.status(400).json({ message: "bookings are not found" });
        }
        res.json(bookings)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}