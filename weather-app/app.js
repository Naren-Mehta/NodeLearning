
const request = require('request');


const url='https://api.darksky.net/forecast/0a303a4b92790b15e6eba6fa5fe62836/37.8267,-122.4233?units=us';

request({url: url, json:true},(error, response)=>{

    const currently= response.body.currently;
    const daily= response.body.daily;

    console.log(daily.data[0].summary +' It is currently '+currently.temperature +' degree out. There is a '+ currently.precipProbability +'% chance of rain.');
});