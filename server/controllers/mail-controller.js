'use strict';

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

module.exports = function({}) {

  function send(req, res) {
    let mailOptions = {
      from: '',
      to: '',
      subject: '',
      text: '',
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

  return {
    send
  };
};