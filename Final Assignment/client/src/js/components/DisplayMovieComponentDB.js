var React= require('react');
var MovieBoxDB = require('./MovieBoxDB');

var DisplayMovieComponentDB = React.createClass({
  render: function(){
    var yetanothertemp = this.props.upHandref;
    var anothertemp = this.props.delHandref;
    var temp = this.props.movieArrDB.map(function(arr) {
      return < MovieBoxDB delHandler={anothertemp} upHandler={yetanothertemp} Array={arr} />
  });
  return (
         <div>
           {temp}
         </div>
       )
     }
});

module.exports = DisplayMovieComponentDB;
