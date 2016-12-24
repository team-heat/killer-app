'use strict';

module.exports = function({ environment }) {
  const config = {
    development: {
      cookieName: 'com.herokuapps.killerapp',
      sessionSecret: '[insert session secret here]',
      webTokenSecret: 'super duper secret',
      connectionString: 'mongodb://localhost:27017/killer-app-db',
      facebookAppId: 'asdf',
      facebookAppSecret: 'asdf',
      facebookCallbackUrl: 'localhost:3002/account/login/facebook/callback',
      githubAppId: 'asdf',
      githubAppSecret: 'asdf',
      githubCallbackUrl: 'localhost:3002/account/login/github/callback',
      port: 3000,
      errorResponseCode: 400
    },
    production: {
      cookieName: process.env.COOKIE_NAME,
      webTokenSecret: process.env.WEB_TOKEN_SECRET,
      sessionSecret: process.env.SESSION_SECRET,
      connectionString: process.env.CONNECTION_STRING,
      facebookAppId: process.env.FACEBOOK_APP_ID,
      facebookAppSecret: process.env.FACEBOOK_APP_SECRET,
      facebookCallbackUrl: process.env.FACEBOOK_APP_CALLBACK,
      githubAppId: process.env.GITHUB_APP_ID,
      githubAppSecret: process.env.GITHUB_APP_SECRET,
      githubCallbackUrl: process.env.GITHUB_APP_CALLBACK,
      port: process.env.PORT
    }
  };

  return config[environment];
};