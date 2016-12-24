'use strict';

const jsonWebToken = require('jsonwebtoken');

module.exports = function ({userData, config}) {

  const webTokenSecret = config.webTokenSecret;

  function login(req, res) {
    const webTokenObject = {
      _id: req.user.id,
      username: req.user.username
    };

    res.status(200).json({
      username: req.user.username,
      auth_token: jsonWebToken.sign(webTokenObject, webTokenSecret)
    });
  }

  function profile(req, res) {
    const userJson = req.user;
    userJson.password = 'tough luck';
    res.status(200).json(userJson);
  }

  function register(req, res) {
    if (req.user) {
      return res.status(400).json({ message: 'User already logged in.' });
    }

    const userObject = req.body;
    return userData.createUser(userObject)
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