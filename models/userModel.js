const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  age: { type: Number },
});
module.exports = mongoose.model('User', userModel);
