const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());




// const PORT = process.env.PORT || 5000;

// Nodemailer transport config (example uses Gmail SMTP)
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'naveen1012ns@gmail.com',        // Replace with your email
//     pass: 'waip rwoo lazl zynd'      // Use App Password if 2FA enabled
//   }
// });
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,      // use STARTTLS
  requireTLS: true,
  auth: {
    user: 'naveen1012ns@gmail.com',
    pass: 'waiprwoolazlzynd'
  }
});


app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'naveen1012ns@gmail.com',
    replyTo: email,
    to: 'naveenk96968@gmail.com',
    subject: `New Contact Form Message from ${name}`,
    text: `Sender Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Email error:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});
let PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
// const PORT = process.env.X_ZOHO_CATALYST_LISTEN_PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });
