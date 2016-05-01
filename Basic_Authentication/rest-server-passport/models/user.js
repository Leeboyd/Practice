var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
  username: {
    type: String,
    require: true
  },
  password: String,
  admin: {
    type: Boolean,
    default: false
  },
},{
  collection: 'Users'
});


User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
