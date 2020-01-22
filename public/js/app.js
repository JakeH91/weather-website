const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const locationTag = document.querySelector('#location');
const forecastTag = document.querySelector('#forecast');

weatherForm.addEventListener('submit', event => {
  event.preventDefault();
  locationTag.textContent = 'Loading...';
  forecastTag.textContent = '';
  const location = search.value;
  fetch(`http://localhost:3000/weather?address=${location}`).then(response => {
    response.json().then(data => {
      if(data.error){
        return locationTag.textContent = data.error;
      }
      locationTag.textContent = data.location;
      forecastTag.textContent = data.forecast;
    })
  })
})