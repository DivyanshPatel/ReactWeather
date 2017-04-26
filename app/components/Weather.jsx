var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return{
      isLoading: false
    }
  },
  handleSearch: function(location){
      var that = this;
      this.setState({isLoading: true});
      openWeatherMap.getTemp(location).then(function(temp){
        that.setState({
          location: location,
          temp: temp,
          isLoading: false
        });

      }, function(errMessage){
        that.setState({isLoading: false});
        alert(errMessage);



      });


    // this.setState({
    //   location: location,
    //   temp: 39
    // });
  },
  render: function(){
    var {isLoading, location, temp } = this.state;

    function renderMessage() {
      if (isLoading){
        return <h3>Fetching Weather...</h3>;
      } else if(temp && location){
        return   <WeatherMessage location={location} temp={temp}/>;
      }
    }
    return(
      <div>
      <h2>Weather component!</h2>
      <WeatherForm onNewName={this.handleSearch}/>
      {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
