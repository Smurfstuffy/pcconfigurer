const mongoose = require('mongoose');

const User = new mongoose.Schema(
  {
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
  },
  {collection: 'users'}
)

const userModel = mongoose.model('User', User);

module.exports = userModel;