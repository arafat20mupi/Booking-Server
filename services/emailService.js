const nodemailer = require('nodemailer');
require('dotenv').config();

// Create a Nodemailer transporter using SMTP settings
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, 
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

// Function to send an email with HTML content
const sendCongratulatoryEmail = (to, name) => {

    const mailOptions = {
        from: process.env.EMAIL, 
        to: to, 
        subject: 'Congratulations! You are now registered!',
        html: `
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Congratulations!</title>
                    <style>
                        body {
                            font-family: 'Roboto', sans-serif;
                            background-color: #f7fafc;
                        }
                        .container {
                            max-width: 600px;
                            margin: 0 auto;
                            background-color: #ffffff;
                            padding: 20px;
                            border-radius: 8px;
                            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                        }
                        h1 {
                            color: #38a169;
                            font-size: 24px;
                            font-weight: bold;
                        }
                        p {
                            color: #4a5568;
                            font-size: 16px;
                            line-height: 1.5;
                        }
                        .footer {
                            margin-top: 20px;
                            text-align: center;
                            color: #a0aec0;
                            font-size: 14px;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h1>Congratulations, ${name}!</h1>
                        <p>Thank you for registering on our platform. We are excited to have you on board!</p>
                        <p>Best regards,<br>Your Company</p>
                        <div class="footer">
                            <p>If you have any questions, feel free to reply to this email.</p>
                        </div>
                    </div>
                </body>
            </html>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent successfully:', info.response);
        }
    });
};

module.exports = {
    sendCongratulatoryEmail
};
