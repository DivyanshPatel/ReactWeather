var React = require('react');

// var WeatherMessage = React.createClass({
//
//   render: function(){
//     var location = this.props.location;
//     var temp = this.props.temp;
//     return(
//       <h2>Is is {temp} in {location}</h2>
//
//     );
//   }
// });

var WeatherMessage = (props) => {
  return(
    <h2>Is is {props.temp}  'C in {props.location}</h2>

  );

}

module.exports = WeatherMessage;
