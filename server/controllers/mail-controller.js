'use strict';

module.exports = function ({ transporter, config }) {

  function sendFeedback(req, res) {
    const mail = req.body;
    console.log(mail);
    const mailOptions = {
      from: mail.senderEmail,
      to: config.nodemailerTargetEmail,
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