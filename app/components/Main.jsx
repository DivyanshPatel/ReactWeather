var React = require('react');
var NavComponent = require('NavComponent');

var Main = React.createClass({

  render: function(){
  return(
    <div>
    <NavComponent />
    <div className='row'>
      <div className='columns medium-6 large-4 small-centered'>
        {this.props.children}
      </div>
    
  </div>
  </div>
  );
  }

}

);

module.exports = Main;
