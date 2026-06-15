const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/PracticeNode'); // connect to database // ye line data base create krti ha

// creater schema
const userschema = new mongoose.Schema({
  username: String,
  name: String,
  age: Number
});

// create model
module.exports = mongoose.model('user', userschema); // ye bnata ha collection