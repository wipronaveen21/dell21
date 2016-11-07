var React= require('react');
var ReactDOM = require('react-dom');
var SearchComponent = require('./SearchComponent');
var DisplayMovieComponent = require('./DisplayMovieComponent');
//var Navbar = require('./components/Navbar');


var Maincomp = React.createClass({

    getInitialState: function()
      {
          return {
              inputValue: '',
              movieArr:[]
          };
      },

  onChange: function(e)
  {

    this.setState({ inputValue: e.target.value });
    console.log(e.target.value);

},

getData: function()
{

$.ajax({
   url:"http://www.omdbapi.com/?s="+this.state.inputValue,
   type:'GET',
   dataType:'JSON',
   success:function(data){
      console.log(data);
      this.setState({movieArr:data.Search});
   }.bind(this),
   error: function(err)
   {
     console.log(err);
   }.bind(this)

 });



},
  render: function(){
    return(
      <div>
    
         <SearchComponent  onChange={this.onChange} getData={this.getData} title={this.state.inputValue}/>
         <DisplayMovieComponent  movieArr={this.state.movieArr}/>

      </div>
    )
  }
});


module.exports=Maincomp;
