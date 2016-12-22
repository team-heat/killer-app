'use strict';

const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports = function ({app, userData}) {
  app.use(passport.initialize());
  app.use(passport.session());

  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  opts.secretOrKey = 'secret';

  passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    console.log(jwt_payload);
    userData.getUserById({ id: jwt_payload.sub })
      .then((err, user) => {
        if (err) {
          return done(err, false);
        }

        if (user) {
          return done(null, user);
        }

        return done(null, false);
      });
  }));
};