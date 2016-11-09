var React= require('react');
var ReactDOM=require('react-dom');
var Home= require('./components/Home');
var Navbar=require('./components/Navbar');
var About=require('./components/About');
var Movies=require('./components/Movies');
var Maincomp=require('./components/Maincomp');

var {hashHistory,Route, Router, IndexRoute}=require('react-router');

var MainComponent=React.createClass({

  render: function() {
    return (
      <div>
      <Navbar/>
      {this.props.children}
      </div>
    )
  }

})

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={MainComponent}>
      <IndexRoute component={Maincomp}/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/movies" component={Movies}/>

    </Route>
  </Router>,document.getElementById('app')
);
