var express = require('express');
var router = express.Router();
var Movie = require('../models/users');
var mongoose= require("mongoose");
/* GET users listing. */
console.log("1st route");
router.route("/add").post(function(req,res){
if(req.body){
  var movieVar  = new Movie(req.body);

  movieVar.save(function(err){
    if (err){
      res.send(err);
    }
    else{
      res.send("Movie Instered");
    }
  });
}
});
console.log("2nd route");
router.route("/getmovies").get(function(req,res){
mongoose.model('MovieDetails').find({}, function(err, movies){
        if (err) {
                    res.send(err);
                }
                else {
                  res.send(movies);
              }
});
});

router.route("/update").put(function(req,res){
Movie.find({'imdbID':req.query.id}, function(err, movie){
        if (err) {
          console.log(err);
                    res.send(err);
                }
                else {
                Movie.update({'imdbID':req.query.id},{"$set":{Title:req.query.title}},function(err,data){
                  if (err){
                    res.send(err);
                  }
                  else{
                    //console.log(data);
                    res.send(data);
                  }
                });

              }
});
});

router.route("/delmovies").delete(function(req,res){
console.log("hi");
    var delid  = req.query.id;

Movie.find({'imdbID':delid}, function(err, movie){
        if (err) {
          console.log(err);
                    res.send(err);
                }
                else {
                  //console.log(movies);
                  Movie.remove({'imdbID':delid},function (err, data){

                    if (err) {

                      res.send(err);
                } else {

                  res.send(data);
                }
                  });

              }
});
});

module.exports = router;
