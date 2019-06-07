var mongoose = require('mongoose');
var registerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: Password,
  dob: { type: Date, default: Date.now }
});
mongoose.model('Register', registerSchema);
