const request = require('request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiamFrZWg5MSIsImEiOiJjazU2bnA5cHEwNm5zM29tbmF4ZTc1Y2tvIn0.Wju77yESsqggjzqpS79Jiw&limit=1`;

  request({ url, json: true}, (error, { body }) => {
    if(error){
      callback('Unable to connect to geocoding service.')
    } else if (body.message || body.features.length === 0){
      callback('Unable to find location. Try another search.');
    } else {
      const [longitude, latitude] = body.features[0].center;
      const location = body.features[0].place_name;
      callback(undefined, { longitude, latitude, location })
    }
  })
}

module.exports = geocode; 