'use strict';

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path');
const session = require('express-session');

module.exports = function ({config}) {
    const app = express();
    app.use(express.static(path.join(__dirname, '/../../dist/')));

    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(session({
        secret: config.sessionSecret,
        resave: true,
        saveUninitialized: true
    }));

    return app;
};