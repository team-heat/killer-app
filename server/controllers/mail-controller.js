'use strict';

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

module.exports = function({ emailAddress }) {

  function sendFeedback(req, res) {
    console.log('In serve mail controller');
    const mail = req.body;

    const mailOptions = {
      from: mail.senderEmail,
      to: emailAddress,
      subject: mail.subject,
      text: mail.content,
      html: ''
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(500).json({ error, message: '' });
      } else {
        res.status(200).json(info.response);
      }
    });
  }

  return { sendFeedback };
};