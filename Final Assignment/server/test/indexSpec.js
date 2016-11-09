var should = require("chai").should(),
// expect = require("chai").expect,
// assert = require("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");

var url = supertest("http://localhost:8080");

describe.skip("Testing Add Movie", function(err){
  it("Add Movie", function(done){
    url
    .post("/users/add")
    .expect(200)
    .send({
      "Title":"Kite",
      "Year" :"1969",
      "imdbID":"tt0064353",
      "Type":"movie",
      "Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BODQ0NDEzMjA3MF5BMl5BanBnXkFtZTgwNTA1OTA0MzE@._V1_SX300.jpg"
    })
    .end(function(err,res){
      res.text.should.be.equal("Movie Instered");
      done();
    });

  });
});

describe("Testing Get Movie", function(err){
  it("Get Movie", function(done){
    url
    .get("/users/getmovies")
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err,res){
      var myObj = JSON.parse(res.text);
      done();
    });

  });
});

describe("Testing /movie/update", function(err){
  it("Update Movie", function(done){
    url
    .put("/users/update?id=tt2044801&title=Kite2")
    .expect(200)
    .end(function(err,res){
      should.not.exist(err);
       var myObj = JSON.parse(res.text);

      myObj.ok.should.be.equal(1);
       done();
    });
  });
});

describe("Testing /movie/delete", function(err){
  it("Delete Movie", function(done){
    url
    .delete("/users/delmovies?id=tt2044801")
    .expect(200)
    .end(function(err,res){
      should.not.exist(err);
       var myObj = JSON.parse(res.text);

       myObj.ok.should.be.equal(1);
       done();
    });
  });
});
