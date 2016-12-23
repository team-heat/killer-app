'use strict';

const jsonwebtoken = require('jsonwebtoken');

module.exports = function ({userData, config}) {
  function login(req, res) {
    res.status(200).json({
      username: req.user.username,
      auth_token: jsonwebtoken.sign(req.user, config.webTokenSecret)
    });
  }

  return {
    login
  };
};