'use strict';

const LocalStrategy = require('passport-local');
const passport = require('passport');

module.exports = function ({app, userData}) {
  app.use(passport.initialize());
  app.use(passport.session());

  const localStrategy = new LocalStrategy({
    username: 'username',
    password: 'password'
  }, (username, password, done) => {
    userData
      .getUserByUsername(username)
      .then(user => {
        if (user) {
          return {
            isAuthenticated: user.authenticate(password),
            user
          };
        }

        return done(null, false);
      })
      .then((result) => {
        if (result.isAuthenticated) {
          return done(null, result.user);
        }

        return done(null, false);
      })
      .catch(err => {
        return done(err, false);
      });
  });

  passport.serializeUser((user, done) => {
    if (user) {
      return done(null, user._id);
    }

    return done(null, null);
  });

  passport.deserializeUser((id, done) => {
    userData
      .getUserById(id)
      .then(user => {
        if (!user) {
          return done(null, false);
        }

        return done(null, user);
      })
      .catch(err => {
        done(err, false);
      });
  });

  passport.use(localStrategy);
};