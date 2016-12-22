'use strict';

const express = require('express');
const passport = require('passport');
const path = require('path');

module.exports = function ({app, userData}) {
  const apiRouter = new express.Router();
  apiRouter
    .post('/users', passport.authenticate('jwt'), function (req, res) {
      // Login user here
      res.status(200).send('POST /api/users');
    })
    .put('/users', function (req, res) {
      // Create user here
      const user = req.body;
      userData.createUser(user)
        .then((token) => {
          res.status(200).json({ token });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .get('/gallery', function (req, res) {
      res.status(200).json({
        message: 'GET /api/gallery'
      });
    })
    .get('/gallery/:id', function (req, res) {
      res.status(200).json({
        message: 'GET /api/gallery/:id'
      });
    });

  app.use('/api', apiRouter);

  app
    .get('/', function (req, res) {
      res
        .status(200)
        .sendFile(path.join(__dirname, '/../../dist/index.html'));
    })
    .get('*', function (req, res) {
      res
        .status(200)
        .sendFile(path.join(__dirname, '/../../dist/index.html'));
    });
};