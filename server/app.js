'use strict';

const environment = process.env.NODE_ENV || 'development';
const config = require('./config/config')({ environment });

const app = require('./config/express.config')({});

require('./config/routes.config')({ app });

app.listen(config.port, function () {
    console.log('App listening on port: ' + config.port);
});