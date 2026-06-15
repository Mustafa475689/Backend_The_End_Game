var express = require('express');
var router = express.Router();
const userModel = require('./users');

/* GET home page. */
router.get('/', function (req, res) {
  req.session.ban = true; // use session // session ki huta ha? session huta ha serer pe data.
  res.cookie("age", 21); // set cookie // cookie ka data browser pe set hut ha.
  res.render('index');
});

// read cookie
router.get('/readcookie', function (req, res) {
  console.log(req.cookies.age);
  res.send("check");
}); 

router.get('/deletecookie', function (req, res) {
  res.clearCookie('age');
  res.send("delete cookie")
});



// session /.................
router.get('/checkban', function (req, res) {
  if (req.session.ban === true) { // check session
    res.send("you are banned");
  }
  else {
    res.send("not banned");
  }

});

router.get('/removeban', function (req, res) {
  req.session.destroy(function (err) {
    if (err) throw err;
    res.send("ban removed");
  });

});
//////////


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
  let allusers = await userModel.findOne({ username: "Mustafa24" }); /// to find any specific user by his user name...
  res.send(allusers);
});

// Delete users
router.get('/delete', async function (req, res) {
  let deleteduser = await userModel.findOneAndDelete({ username: "Mustafa24" }); /// to find any specific user by his user name...
  res.send(deleteduser);
});


module.exports = router; 
