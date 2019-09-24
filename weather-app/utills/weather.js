
const request = require('request');

const weather = (lat, long, callback)=>{
    const weatherUrl='https://api.darksky.net/forecast/0a303a4b92790b15e6eba6fa5fe62836/'+encodeURIComponent(lat) + ','+encodeURIComponent(long);
    console.log(weatherUrl);

    request({url:weatherUrl, json:true},(error, response)=>{
        if(error){
            callback('Unable to connect to weather API ', undefined)
        }else if(response.body.error){
            callback('Unable to find location', undefined)
        }else{
            callback(undefined, {
                summary:response.body.daily.data[0].summary,
                temperature:response.body.currently.temperature,
                precipProbability: response.body.currently.precipProbability
            })
        }
    })

};

module.exports= weather;