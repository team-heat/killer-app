'use strict';

const environment = process.env.NODE_ENV || 'development';
const config = require('./config/config')({ environment });

const app = require('./config/express.config')({ config });
const userData = require('./data/user-data')({});

require('./config/local.passport.config')({ app, userData });
require('./config/jwt.passport.config')({ app, userData, config });

require('./config/routes.config')({ app, userData, config });

require('./config/mongoose.config')({ config });

app.listen(config.port, function () {
    console.log(`App listening on port: ${config.port}`);
});
