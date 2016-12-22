'use strict';

const express = require('express');
const passport = require('passport');
const path = require('path');
const jsonwebtoken = require('jsonwebtoken');

module.exports = function ({app, userData}) {
  const apiRouter = new express.Router();
  apiRouter
    .post('/users', passport.authenticate('local'), function (req, res) {
      // Login user here
      console.log(req.body);
      res.status(200).json(jsonwebtoken.sign(req.user, 'secret'));
    })
    .put('/users', passport.authenticate('jwt'), function (req, res) {
      // Create user here
      res.status(200).send('PUT /api/users');
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