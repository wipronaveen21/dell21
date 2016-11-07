var React=require('React');
var {Link}=require('react-router');

var Navbar=React.createClass({

  render:  function(){
    return(
      <div className="container-fluid" id="navbaar">
	     <div className="row">
		<div className="col-md-12">
    <ul className="nav nav-pills">
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/movies">Movies</Link>
      </li>

    </ul>
		</div>
	</div>
</div>
    )
  }
})

module.exports=Navbar;
