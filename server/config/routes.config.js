'use strict';

const express = require('express');
const passport = require('passport');
const path = require('path');

module.exports = function ({ app, userController, itemListingController, favoritesController }) {
  const apiRouter = new express.Router();
  apiRouter
    .get('/users', passport.authenticate('jwt'), userController.profile)
    .post('/users', passport.authenticate('local'), userController.login)
    .put('/users', userController.register)
    .get('/logout', passport.authenticate('jwt'), userController.logout)
    .get('/favorites', passport.authenticate('jwt'), favoritesController.index)
    .post('/favorites', passport.authenticate('jwt'), favoritesController.create)
    .get('/gallery', itemListingController.index)
    .get('/gallery/:id', itemListingController.details)
    .post('/gallery', passport.authenticate('jwt'), itemListingController.createListing)
    .post('/gallery/:id', passport.authenticate('jwt'), itemListingController.submitOfferForListing)
    .put('/gallery/:id', passport.authenticate('jwt'), itemListingController.updateListing);

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