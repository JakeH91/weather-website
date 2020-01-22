const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/69a34aa5c7f8c47e51feac9b644c2d36/${latitude},${longitude}?units=si&exclude=hourly,minutely,flags,offset`;

  request({ url, json: true }, (error, { body }) => {
    if(error){
      callback('Unable to connect to weather service');
    } 
    else if (body.error){
      callback('Unable to find location');
    }
    else {
      const { currently, daily } = body;
      callback(undefined, `${daily.data[0].summary} It is currently ${currently.temperature} degrees out. There is a ${currently.precipProbability}% chance of rain.`);
    }
  })
}

module.exports = forecast;