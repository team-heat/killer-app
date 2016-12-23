'use strict';

const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports = function ({app, userData, config}) {
  app.use(passport.initialize());
  app.use(passport.session());

  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  opts.secretOrKey = config.sessionSecret;

  passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    userData.getUserById(jwt_payload._doc._id)
      .then((user) => {
        if (user) {
          return done(null, user);
        }

        return done(null, false);
      })
      .catch((err) => {
        done(err, false);
      });
  }));
};