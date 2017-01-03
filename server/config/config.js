'use strict';

module.exports = function ({ environment }) {
  const config = {
    development: {
      // nodemailer not working locally to avoid disclosing password
      imagesDb: 'mongodb://localhost:27017/killer-app-db-images',
      nodemailerTargetEmail: 'team.heat.killer.app@gmail.com',
      nodemailerSmtpInfo: 'smtps://team.heat.killer.app%40gmail.com:notrealpass@smtp.gmail.com',
      cookieName: 'com.herokuapps.killerapp',
      sessionSecret: '[insert session secret here]',
      webTokenSecret: 'super duper secret',
      connectionString: 'mongodb://localhost:27017/killer-app-db',
      port: 3000,
      errorResponseCode: 400
    },
    production: {
      imagesDb: process.env.IMAGES_DB,
      nodemailerTargetEmail: process.env.TARGET_EMAIL,
      nodemailerSmtpInfo: process.env.SMTP_INFO,
      cookieName: process.env.COOKIE_NAME,
      webTokenSecret: process.env.WEB_TOKEN_SECRET,
      sessionSecret: process.env.SESSION_SECRET,
      connectionString: process.env.CONNECTION_STRING,
      port: process.env.PORT,
      errorResponseCode: 400
    }
  };

  return config[environment];
};