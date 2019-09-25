const geocode = require('./utills/geocode');
const forecast = require('./utills/weather');
const chalk= require('chalk');

const address= process.argv[2];

if(!address){
    console.log(chalk.red('Please provide a address'));
}else{
    geocode(address, (error, data) => {

        if (error) {
            return console.log(error);
        }
    
        const latitude = data.latitude;
        const longitude = data.longitude;
    
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return console.log(error);
            }
    
            console.log(data.location);
            console.log(chalk.green(forecastData.summary + ' It is currently ' 
            + forecastData.temperature + ' degree out. There is a ' + forecastData.precipProbability + '% chance of rain.'));
        });    
    });
}
