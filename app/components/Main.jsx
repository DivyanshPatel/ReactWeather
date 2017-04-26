var React = require('react');
var NavComponent = require('NavComponent');

var Main = React.createClass({

  render: function(){
  return(
    <div>
    <NavComponent />
    <h2>Main component!</h2>
    {this.props.children}
  </div>
  );
  }

}

);

module.exports = Main;
