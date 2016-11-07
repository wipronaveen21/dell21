var React= require('react');
var MovieBox = React.createClass({
  addToDB:function(){
  $.ajax({
     url:"http://localhost:8080/users/add",
     type:'POST',
     dataType:'JSON',
     data:this.props.Array,
     success:function(data){
        console.log(data);
     }.bind(this),
     error: function(err)
     {
       console.log(err);
     }.bind(this)
   });
},
  render:function(){
    var link = "http://www.imdb.com/title/"+this.props.Array.imdbID;
    return(
    <div>
    <div className="row">
      <div className="col-md-6" id="left">
      <br/>
          <img  src={this.props.Array.Poster} id="imgheight"/>
      </div>
    <div className="col-md-6" id="right">
    <br/>
     <h3>{this.props.Array.Title}</h3>
     <h3>{this.props.Array.Year}</h3>
     <h3>{this.props.Array.Type}</h3>
     <p><a href={link} className="btn btn-primary" target="_blank">View on IMDb </a><span>&nbsp;&emsp;</span>
              <button  className="btn btn-warning" onClick={this.addToDB} >Add as Favorite</button></p>
     </div>
     </div>
     </div>
    )
  }
});
module.exports = MovieBox;
