var mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
  
  fullname: {
      type: String,
      required: true
}, 
  email: {
    type: String,
    required: true
},  
  username: {
    type: String,
    required: true
},  
  password: {
    type: String,
    required: true
} 
});

var Users = mongoose.model('Users', UsersSchema);

module.exports = Users;