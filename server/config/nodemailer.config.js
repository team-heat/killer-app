'use strict';

const nodemailer = require('nodemailer');

module.exports = function ({config}) {
  const transporter = nodemailer.createTransport(config.nodemailerSmtpInfo);

  return transporter;
};
