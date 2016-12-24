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
    res.status(200).json({ message: 'GET /api/users' });
  }

  function register(req, res) {
    const userObject = req.body;
    userData.createUser(userObject)
      .then((user) => {
        res.status(200).json({ message: 'PUT /api/users' });
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  }

  return {
    login,
    profile,
    register
  };
};