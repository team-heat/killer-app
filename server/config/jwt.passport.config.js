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
  opts.issuer = "accounts.examplesoft.com";
  opts.audience = "yoursite.net";
  passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    console.log(jwt_payload);
    userData.getUserById({ id: jwt_payload.sub })
      .then((err, user) => {
        if (err) {
          return done(err, false);
        }
        if (user) {
          done(null, user);
        } else {
          done(null, false);
          // or you could create a new account 
        }

        return null;
      });
  }));
};