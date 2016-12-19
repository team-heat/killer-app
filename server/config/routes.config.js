'use strict';

const express = require('express');
const path = require('path');

module.exports = function ({app}) {
    const apiRouter = new express.Router();

    app.use('/api', apiRouter);

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '/../../dist/index.html'));
    });
};