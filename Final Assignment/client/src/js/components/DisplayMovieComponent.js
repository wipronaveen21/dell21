var React= require('react');
var MovieBox = require('./MovieBox');

var DisplayMovieComponent = React.createClass({
  render: function(){
    var temp = this.props.movieArr.map(function(arr) {
      return < MovieBox Array={arr} />
  });
  return (
         <div>
           {temp}
         </div>
       )
     }
});

module.exports = DisplayMovieComponent;
