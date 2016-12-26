/* globals Promise*/

'use strict';

module.exports = function ({User}) {
  function createUser(user) {
    const newUser = User.createUser(user);
    return new Promise((resolve, reject) => {
      newUser.save((err) => {
        if (err) {
          return reject(err);
        }
        return resolve(newUser);
      });
    });
  }

  function getUserByUsername(username) {
    return new Promise((resolve, reject) => {
      User.findOne({
        username
      }, (err, user) => {
        if (err) {
          return reject(err);
        }
        return resolve(user);
      });
    });
  }

  function getUserByEmail(email) {
    return new Promise((resolve, reject) => {
      User.findOne({
        email
      }, (err, user) => {
        if (err) {
          return reject(err);
        }
        return resolve(user);
      });
    });
  }

  function getUserById(id) {
    return new Promise((resolve, reject) => {
      User.findOne({
        _id: id
      }, (err, user) => {
        if (err) {
          return reject(err);
        }
        return resolve(user);
      });
    });
  }

function updateUser(user){
  return new Promise((resolve, reject) => {
      user.save((err) => {
        if (err) {
          return reject(err);
        }
        return resolve(user);
      });
    });
}

  return {
    createUser,
    getUserByUsername,
    getUserByEmail,
    getUserById,
    updateUser
  };
};