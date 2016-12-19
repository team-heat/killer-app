'use strict';

const express = require('express');

module.exports = function({}){
    const app = express();
    
    app.use(express.static('../../dist'));

    return app;
};