var React = require('react');

var About = React.createClass({

  render: function(){
    return(
      <div>
      <h1 className='text-center page-title'>About</h1>
      <p>This is a wather application built on React</p>
      <p>Here are some tools I used:</p>
      <ul>
        <li>
          <a href='https://facebook.github.io/react'>React</a> - This was the Javascript framework used.
        </li>
        <li>
          <a href='http://openweathermap.org'>Open Weather Map</a> - I used openweathermap to to search for weather data by City name.
        </li>
      </ul>
      </div>

    );
  }
});

module.exports = About;
