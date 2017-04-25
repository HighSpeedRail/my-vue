var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
  console.log('mongoose opened');
});

var userSchema = new mongoose.Schema({
  cellphone: {type: Number},
  password: {type: String}
}, {collection: 'user'});
var User = mongoose.model('user', userSchema);

module.exports = User;
