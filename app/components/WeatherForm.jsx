
var React = require('react');

var WeatherForm = React.createClass({
  onHandle: function(e){
    e.preventDefault();

    var location = this.refs.cityname.value;

    if (location.length > 0){
      this.refs.cityname.value='';
      this.props.onNewName(location);
    }

  },
  render: function(){
    return(
      <div>
        <form onSubmit={this.onHandle}>
          <input type="search" placeholder="Search weather by city" ref="cityname"/>
          <button className='button expanded hollow'>Get Weather</button>
        </form>
      </div>

    );
  }
});

module.exports = WeatherForm;
