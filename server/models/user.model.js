const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  favorites: [{}],
  activeListings: [{}]
});

let UserModel;

userSchema.static('createUser', function (user) {
  return new UserModel({
    username: user.username,
    password: user.password,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    favorites: user.favorites || [],
    activeListings: user.activeListings || []
  });
});

userSchema.method('isAuthenticated', function (username, password) {
  return this.username === username && this.password === password;
});

mongoose.model('User', userSchema);
UserModel = mongoose.model('User');

module.exports = function () {
  return UserModel;
};