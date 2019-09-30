const geocode = require('./utills/geocode');
const forecast = require('./utills/weather');
const chalk= require('chalk');

const address= process.argv[2];

if(!address){
    console.log(chalk.red('Please provide a address'));
}else{
    geocode(address, (error, {latitude,longitude,location}) => {

        if (error) {
            return console.log(error);
        }
    
        // const latitude = data.latitude;
        // const longitude = data.longitude;

        console.log(latitude,longitude);
    
        forecast(latitude, longitude, (error, {summary,precipProbability,temperature}) => {
            if(error){
                return console.log(error);
            }
    
            console.log(location);
            console.log(chalk.green(summary + ' It is currently ' 
            + temperature + ' degree out. There is a ' + precipProbability + '% chance of rain.'));
        });    
    });
}
