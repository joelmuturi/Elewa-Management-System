// Import nodemailer
const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'joelkaranja562@gmail.com', // Your email address
    pass: 'Joelmuturi620@' // Your password or app-specific password
  }
});

// Example function to send an email
const sendEmail = async (to, subject, text) => {
  try {
    const mailOptions = {
      from: 'your_email@gmail.com', // Sender address
      to: to, // List of recipients
      subject: subject, // Subject line
      text: text // Plain text body
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

// Usage example
sendEmail('recipient@example.com', 'Notification: Task Due', 'Reminder: You have a task due today.');
