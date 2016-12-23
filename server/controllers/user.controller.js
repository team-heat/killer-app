'use strict';

const jsonwebtoken = require('jsonwebtoken');

module.exports = function ({userData, config}) {
  function login(req, res) {
    res.status(200).json({
      username: req.user.username,
      auth_token: jsonwebtoken.sign(req.user, config.webTokenSecret)
    });
  }

  function profile(req, res) {

  }

  function register(req, res) {
    res.status(200).json({ message: 'PUT /api/users' });
  }

  return {
    login,
    profile,
    register
  };
};