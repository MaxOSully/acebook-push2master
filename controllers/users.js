const bcrypt = require('bcrypt')
// const cookies = require('cookie-parser')
// const popupS = require('popups')



var Users = require('../models/users'); // connects to the model which allows you to access the users database
var Posts = require('../models/users'); // connects to the model which allows you to access the posts database for display in the user bio

var UsersController = {
  Index: function(req, res) {
    res.render('users/register', {}); // render the user index view folder
  },

  Create: function(req, res) {

    if (req.body.password === req.body.repeat_password) {

      let passwordHash = bcrypt.hashSync(req.body.password, 10); // encrypts password using bcrypt module

      var users = new Users({ // creates a new instance of users with the text, with respeats to the form that is created in the model &view

        fullname: req.body.fullname,
        email: req.body.email,
        username: req.body.username,
        password: passwordHash

      });

      Users.findOne({
        username: req.body.username
      }, function(err, check) { // checks if the inputted username is in the db
        console.log("USERNAME IS HERE")
        console.log(req.body.username)
        if (err) {
          throw err;
        } else if (check !== null) {
          res.render('ourErrors', {
            error: "Username already taken. Please enter a different username."
          })
        } // if it's not set the check to true
        else {
          users.save(function(err) { // saves the new post
            if (err) {
              throw err;
            }

            res.status(201).redirect('/users/login');
          })
        }
      })
    } else {
      // res.render('error', { message: 'Incorrect password' });
      // document.getElementById('demo').innerHTML = "You have entered the wrong password!";
      //     popupS.window({
      //         mode: 'alert',
      //         content: "Your password did not Match"
      //     });

      res.render('ourErrors', {
        error: "Passwords do not match"
      });
    }
  },


  Login: function(req, res) {
    res.render('users/login', {}); // render the user index view folder
  },

  Authenticate: function(req, res) {
    Users.findOne({
      email: req.body.email
    }, function(err, user) {
      if (err) {
        throw err;
      }

      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.cookie('username', user.username) // getting cookie for the current logged in user
          // var username = req.cookies['username'];     // sets username variable to the cookies username
          res.redirect('/posts')
        } else {
          res.redirect('/users/login');
        };
      }
    })
  },

  Bio: function(req, res) {
    // console.log(req)
    Users.findOne({  // gets the currently logged in user from the db
      username: req.cookies['username']
    }, function(req, name) {
      res.render('users/profile', { // this page is only for viewing the profile
        user: name // passes in the current users info for the page to use when it renders
      });
    });
  },

  EditBio: function(req, res) {
    Users.findOne({
      username: req.cookies['username']
    }, function(req, name) {
      res.render('users/profile_edit', { // this page allows for the editing of the profile
        user: name
      });
    })
  },

  NewBio: function(req, res) {
    console.log(req.body.biobox)
    Users.findOneAndUpdate({ // used to edit the info on a specific document
      username: req.cookies['username'] // filters to only update logged in users doc
    }, {
      bio: req.body.biobox // updates the bio to be that which was entered in the textarea of the profile_edit page
    }, {
      upsert: true // allows for the bio to be created if it doesnt exist
    }, function() {});

    res.redirect('/users/profile'); // redirects to the viewing profile page
  },

  Logout: function(req, res) {
    res.clearCookie('username')
    res.redirect('/')
  }
};

module.exports = UsersController;
