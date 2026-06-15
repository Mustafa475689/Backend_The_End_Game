var express = require('express');
var router = express.Router();
const userModel = require('./users');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index');
});

// Now we start learn create, read update and delete:

// Create user through this foute
router.get('/create', async function (req, res) {
  const createduser = await userModel.create({  // ye line asyncronous ha tu hm async await k use kryngy
    username: 'Mustafa24',
    name: 'Mustafa',
    age: 24
  });
  res.send(createduser);
  //
});

  // Find user
  router.get('/allusers', async function (req, res) {
    // let allusers = await userModel.find(); /// to find all users
    let allusers = await userModel.findOne({username: "Mustafa24"}); /// to find any specific user by his user name...
    res.send(allusers);
  });

  // Delete users
  router.get('/delete', async function (req, res) {
    let deleteduser = await userModel.findOneAndDelete({username: "Mustafa24"}); /// to find any specific user by his user name...
    res.send(deleteduser);
  });


module.exports = router; 
