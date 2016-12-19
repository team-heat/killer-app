'use strict';

const express = require('express');
const path = require('path');

module.exports = function ({}) {
    const app = express();

    app.set('view engine', 'pug');
    app.set('views', path.join(__dirname, '/../../dist'));
    app.use(express.static(path.join(__dirname, '/../../dist/')));

    return app;
};