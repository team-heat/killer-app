'use strict';

const express = require('express');
const passport = require('passport');
const path = require('path');

module.exports = function ({ app, userController, itemListingController }) {
  const apiRouter = new express.Router();
  apiRouter
    .post('/users', passport.authenticate('local'), userController.login)
    .put('/users', passport.authenticate('jwt'), function (req, res) {
      // Create user here
      res.status(200).send('PUT /api/users');
    })
    .get('/users', passport.authenticate('jwt'), function (req, res) {
      res.status(200).json({ message: 'GET /api/users' });
    })
    .get('/gallery', itemListingController.index)
    .post('/gallery', itemListingController.createListing)
    .get('/gallery/:id', itemListingController.details);

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