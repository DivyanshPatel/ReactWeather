var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=70f8ff43b820e01d42ce17999395f0a1&units=imperial';

module.exports = {
  getTemp: function (location) {
      var encodedLocation = encodeURIComponent(location);
      var requestURL= `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
      // alert(requestURL);

      return axios.get(requestURL).then(function(res){
        if (res.data.cod && res.data.message){
          throw new Error(res.data.message);
        }else{
          var temp = (res.data.main.temp-32)*(5/9);
          return res.data.main.temp;
        }
      },function (res) {
        throw new Error(res.data.message);

      });



  }


}
