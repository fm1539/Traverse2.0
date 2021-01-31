const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  fName: { type: String, required: true },
  lName: {type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  socketid: { type: String },
  friends: { type: Array },
  requests: { type: Array },
  chats: { type: Array }
});

module.exports = mongoose.model('User', userSchema)