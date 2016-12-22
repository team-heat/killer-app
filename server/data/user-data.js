/* globals Promise*/

'use strict';

const testUser = {
  username: 'Pesho',
  password: 'Peshev'
};

module.exports = function ({User}) {
  function getUserByUsername(username) {
    return new Promise(resolve => resolve(testUser));
  }

  function getUserById(id) {
    return new Promise(resolve => resolve(testUser));
  }

  return {
    getUserByUsername,
    getUserById
  };
};