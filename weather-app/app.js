const chalk = require('chalk');
const request = require('request');

const successChalk=chalk.green;
const errorChalk=chalk.red;

const weatherUrl = 'https://api.darksky.net/forecast/0a303a4b92790b15e6eba6fa5fe62836/37.8267,-122.4233';
const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/hongasandra%20bengaluru.json?access_token=pk.eyJ1IjoibmFyZW4xNyIsImEiOiJjazB4Nmo2ajcwMWM5M2huenZtd3E2bWZuIn0.-xTsU0tSZ6-FT9YV5MEpIQ&limit=1';


request({ url: weatherUrl, json: true }, (error, response) => {

    if (error) {
        console.log(errorChalk('Unable to connect to weather service'));
    }else if(response.body.error){
        console.log(errorChalk('Unable to find location'));
    } else {
        const currently = response.body.currently;
        const daily = response.body.daily;
        console.log(successChalk(daily.data[0].summary + ' It is currently ' + currently.temperature + ' degree out. There is a ' + currently.precipProbability + '% chance of rain.'));
    }

});

request({url:geocodeUrl, json:true}, (error, response) => {

    if(error){
        console.log(errorChalk('Unable to connect with Geocode api'));
    }else if(response.body.features.length === 0){
        console.log(errorChalk('Unable to find location. Try another search.'));

    }else{
        const latitude=response.body.features[0].center[1];
        const logitude=response.body.features[0].center[0 ];
    
        console.log(successChalk(latitude, logitude));
    }
   
});
