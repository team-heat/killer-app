/* globals Promise*/

'use strict';

const jsonwebtoken = require('jsonwebtoken');

const testUser = {
  _id: 150,
  username: '123',
  password: '123'
};

module.exports = function ({User}) {
  function createUser(user) {
    return new Promise(resolve => resolve(jsonwebtoken.sign(testUser, 'secret')));
  }

  function getUserByUsername(username) {
    return new Promise(resolve => resolve(testUser));
  }

  function getUserById(id) {
    return new Promise(resolve => resolve(testUser));
  }

  return {
    createUser,
    getUserByUsername,
    getUserById
  };
};