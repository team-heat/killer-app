'use strict';

const express = require('express');
const passport = require('passport');
const path = require('path');

module.exports = function ({ app, userController, itemListingController }) {
  const apiRouter = new express.Router();
  apiRouter
    .get('/users', passport.authenticate('jwt'), userController.profile)
    .post('/users', passport.authenticate('local'), userController.login)
    .put('/users', userController.register)
    .get('/gallery', itemListingController.index)
    .get('/gallery/:id', itemListingController.details)
    .post('/gallery', passport.authenticate('jwt'), itemListingController.createListing);

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