'use strict';

const express = require('express');
const passport = require('passport');
const path = require('path');

module.exports = function ({ app, userController, itemListingController, favoritesController, uploadController, statistcsController }) {
  const apiRouter = new express.Router();
  apiRouter
    .post('/upload', passport.authenticate('jwt'), uploadController.createFile)
    .get('/users', passport.authenticate('jwt'), userController.profile)
    .post('/users', passport.authenticate('local'), userController.login)
    .put('/users', userController.register)
    .get('/logout', passport.authenticate('jwt'), userController.logout)
    .get('/favorites', passport.authenticate('jwt'), favoritesController.index)
    .post('/favorites', passport.authenticate('jwt'), favoritesController.create)
    .put('/favorites', passport.authenticate('jwt'), favoritesController.remove)
    .get('/gallery', itemListingController.index)
    .get('/gallery/:id', itemListingController.details)
    .post('/gallery', passport.authenticate('jwt'), itemListingController.createListing)
    .post('/gallery/:id', passport.authenticate('jwt'), itemListingController.submitOfferForListing)
    .put('/gallery/:id', passport.authenticate('jwt'), itemListingController.updateListing)
    .put('/gallery/:id/comments', passport.authenticate('jwt'), itemListingController.addCommentToListing)
    .get('/statistics/items/mostExpensiveItems', statistcsController.mostExpensiveItems)
    .get('/statistics/items/mostSalledMakes', statistcsController.mostSalledMakes)
    .get('/statistics/items/mostOfferedItems', statistcsController.mostOfferedItems)
    .get('/statistics/items/mostCommentedItems', statistcsController.mostCommentedItems)
    .get('/statistics/users/topSellers', statistcsController.topSellers)
    .get('/statistics/users/topBuyers', statistcsController.topBuyers)
    .get('/statistics/users/topActiveUsers', statistcsController.topActiveUsers);

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