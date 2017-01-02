'use strict';

module.exports = function({ environment }) {
  const config = {
    development: {
      emailAddress: 'teamheat@gmail.com',
      cookieName: 'com.herokuapps.killerapp',
      sessionSecret: '[insert session secret here]',
      webTokenSecret: 'super duper secret',
      connectionString: 'mongodb://localhost:27017/killer-app-db',
      port: 3000,
      errorResponseCode: 400
    },
    production: {
      emailAddress: 'teamheat@gmail.com',
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