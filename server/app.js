'use strict';

const environment = process.env.NODE_ENV || 'development';
const config = require('./config/config')[environment];

app.listen(config.port);