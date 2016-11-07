var React= require('react');
var MovieBoxDB = React.createClass({
getInitialState:function(){
  return {
      text:"",
      modid:"#"+this.props.Array.imdbID
    };
},
  updateDB: function(id,title)
  {
      var uphandler = this.props.upHandler.bind(null,id,this.state.text);
      console.log("http://localhost:8080/users/update?id="+this.props.Array.imdbID+"&title="+this.state.text);

  $.ajax({
     url:"http://localhost:8080/users/update?id="+this.props.Array.imdbID+"&title="+this.state.text,
     type:'PUT',
     success:function(data){
        console.log(data);
        $('#myModal').modal('hide');
         uphandler();
     }.bind(this),
     error: function(err)
     {
       console.log(err);
     }.bind(this)
   });
  },
changeHandler:function(evt){
this.setState({text:evt.target.value});
},
clickHandler:function(id,title){
this.updateDB(id,title);
},
  deleteDB: function(id)
  {
    var delhandler = this.props.delHandler.bind(null,id);
      var link="http://localhost:8080/users/delmovies?id="+this.props.Array.imdbID;
  $.ajax({
     url:link,
     type:'DELETE',
     dataType:'JSON',
     success:function(data){
       delhandler();
        console.log(data);
     }.bind(this),
     error: function(err)
     {
       console.log(err);
     }.bind(this)
   });
  },
  render:function(){
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
     <p><button className="btn btn-primary" data-toggle="modal" data-target={this.state.modid}>Update </button><span>&nbsp;&emsp;</span>
        <button  className="btn btn-warning" onClick={this.deleteDB.bind(null,this.props.Array.imdbID)} >Delete</button></p>
     </div>
     </div>


     <div id={this.props.Array.imdbID} className="modal fade" role="dialog">
 <div className="modal-dialog">
   <div className="modal-content">
     <div className="modal-header">
       <button type="button" className="close" data-dismiss="modal">&times;</button>
       <h4 className="modal-title">Modal Header</h4>
     </div>
     <div className="modal-body">
     <form className="form-horizontal">
 <div className="form-group">
     <label form="title" className="control-label col-xs-2">Title</label>
     <div className="col-xs-10">
         <input type="text" className="form-control" id="title" placeholder={this.props.Array.Title} onChange={this.changeHandler}/>
     </div>
 </div>
 <div className="col-xs-12">
 <center><button type="button" className="btn btn-primary " onClick={this.clickHandler.bind(null,this.props.Array.imdbID,this.props.Array.Title)} data-dismiss="modal" >Update Movie Name</button></center>
</div>
</form>
     </div>
     <div className="modal-footer">
       <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
     </div>
   </div>

 </div>
</div>
     </div>
    )
  }
});
module.exports = MovieBoxDB;
