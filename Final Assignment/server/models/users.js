var mongoose= require("mongoose");
var Schema = mongoose.Schema;

var movieDetailsSchema = new Schema({
      idkey:String,
      Title:String,
      Year:String,
      imdbID:String,
      Type:String,
      Poster:String

});

module.exports = mongoose.model('MovieDetails',movieDetailsSchema);
