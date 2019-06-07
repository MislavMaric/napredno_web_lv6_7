var mongoose = require('mongoose');
var blobSchema = new mongoose.Schema({
  nazivProjekta: String,
  opisProjekta: String,
  obavljeniPoslovi: String,
  cijenaProjekta: Number,
  datumPocetka: Date,
  datumZavrsetka: Date,
  dob: { type: Date, default: Date.now }
});
mongoose.model('Blob', blobSchema);
