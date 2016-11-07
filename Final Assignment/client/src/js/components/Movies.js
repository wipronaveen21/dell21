var React=require('react')
var DisplayMovieComponentDB = require('./DisplayMovieComponentDB');

var Movies=React.createClass({

  getInitialState: function()
    {
        return {
            movieArrDB:[]
        };
    },


componentWillMount: function()
{

$.ajax({
 url:"http://localhost:8080/users/getmovies",
 type:'GET',
 dataType:'JSON',
 success:function(data){
    console.log(data);
    this.setState({movieArrDB:data});
 }.bind(this),
 error: function(err)
 {
   console.log(err);
 }.bind(this)

});
},
deleteHandler:function(imdbID){
  var temp = this.state.movieArrDB;
  var j=-1;
  for (var i = 0; i < temp.length; i++) {
    if(temp[i].imdbID==imdbID){
      j=i;
      break;
    }
  }
  if(j>-1){
    temp.splice(j,1);
  }
  this.setState({movieArrDB:temp});
},

updateHandler:function(imdbID,Title){
  var temp = this.state.movieArrDB;

  for (var i = 0; i < temp.length; i++) {
    if(temp[i].imdbID==imdbID){
      temp[i].Title= Title;
      console.log(Title);
      this.setState({movieArrDB:temp});
      break;
    }
  }
},
render: function(){
  return(
    <div>
       <DisplayMovieComponentDB delHandref={this.deleteHandler} upHandref={this.updateHandler} movieArrDB={this.state.movieArrDB}/>

    </div>
  )
}
});
module.exports=Movies;
