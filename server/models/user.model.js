const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  image: String,
  age: Number,
  gender: String,
  email: String,
  favorites: [{}],
  activeListings: [{}]
});

let UserModel;
const femaleProfileImage = '/assets/profile-female.jpg';
const maleProfileImage = '/assets/profile-male.jpg';
userSchema.static('createUser', function (user) {
  let imageUrl = user.image;
  if (!imageUrl) {
    if (user.gender === 'male') {
      imageUrl = maleProfileImage;
    } else {
      imageUrl = femaleProfileImage;
    }
  }

  return new UserModel({
    username: user.username,
    password: user.password,
    firstName: user.firstName,
    lastName: user.lastName,
    image: imageUrl,
    age: user.age,
    gender: user.gender,
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