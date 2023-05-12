const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;