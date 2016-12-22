'use strict';

const express = require('express');
const passport = require('passport');
const path = require('path');

module.exports = function ({app}) {
    const apiRouter = new express.Router();
    apiRouter
        .post('/users', passport.authenticate('local'), function (req, res) {
            res.status(200).send('POST /api/users');
        })
        .put('/users', function (req, res) {
            // Create user here
            res.status(200).send('PUT /api/users');
        });


    app.use('/api', apiRouter);

    app.get('/', function (req, res) {
        res
            .status(200)
            .sendFile(path.join(__dirname, '/../../dist/index.html'));
    });
};