var mongoose = require('mongoose');
var loginSchema = new mongoose.Schema({
  email: String,
  password: Password,
  dob: { type: Date, default: Date.now }
});
mongoose.model('Login', loginSchema);
