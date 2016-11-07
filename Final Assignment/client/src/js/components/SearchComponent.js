var React= require('react');
var ReactDOM = require('react-dom');


var SearchComponent = React.createClass({

  render: function(){

    return(
      <div>
      <br/>
               <input  type="text" className="col-md-12" placeholder="Search movie" onChange={this.props.onChange}  />
               <br />
               <br/>
               <input type="button" className="col-md-12" value="Search" onClick={this.props.getData}/>

      </div>
    )
  }






});

module.exports = SearchComponent;
