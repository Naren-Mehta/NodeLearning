
const request = require('request');

const forecast = (lat, long, callback) => {
    // const weatherUrl = 'https://api.darksky.net/forecast/0a303a4b92790b15e6eba6fa5fe62836/'+ lat
    //     + ',' + long+'';

    weatherUrl='https://api.darksky.net/forecast/0a303a4b92790b15e6eba6fa5fe62836/37.8267,-122.4233';

    console.log(weatherUrl);

    request({ url: weatherUrl, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather API ', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                summary: response.body.daily.data[0].summary,
                temperature: response.body.currently.temperature,
                precipProbability: response.body.currently.precipProbability
            })
        }
    })

};

module.exports = forecast;