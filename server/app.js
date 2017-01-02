'use strict';

const environment = process.env.NODE_ENV || 'development';
const config = require('./config/config')({ environment });

const app = require('./config/express.config')({ config });

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

const User = require('./models/user.model')({});
const ItemListing = require('./models/item-listing.model')({});

const userData = require('./data/user.data')({ User });
const itemListingData = require('./data/item-listing.data')({ ItemListing });

const userController = require('./controllers/user.controller')({ userData, config });
const itemListingController = require('./controllers/item-listing.controller')({ itemListingData });
const favoritesController = require('./controllers/favorites.controller')({ userData, itemListingData });
const statistcsController = require('./controllers/statistics.controller')({ userData, itemListingData });
const uploadController = require('./controllers/upload.controller')({});
const mailController = require('./controllers/mail-controller')({ transporter, emailAddress: config.emailAddress });

require('./config/local.passport.config')({ app, userData });
require('./config/jwt.passport.config')({ app, userData, config });

require('./config/routes.config')({ app, userController, itemListingController, favoritesController, uploadController, statistcsController, mailController });

require('./config/mongoose.config')({ config });

app.listen(config.port, function() {
  console.log(`App listening on port: ${config.port}`);
});