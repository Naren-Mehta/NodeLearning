
const request = require('request');

const geocode = (address,callback)=>{

    const geocodeUrl='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) 
    +'.json?access_token=pk.eyJ1IjoibmFyZW4xNyIsImEiOiJjazB4Nmo2ajcwMWM5M2huenZtd3E2bWZuIn0.-xTsU0tSZ6-FT9YV5MEpIQ&limit=1';
    
    request({url:geocodeUrl, json:true},(error, response)=>{
        if(error){
            callback('Unable to connect to location services!',undefined);
        }else if(response.body.features.length === 0){
            callback('Unable to find location. Try another search. ',undefined);
        }else{
            callback(undefined,{
                latitude:response.body.features[0].center[1],
                longitude:response.body.features[0].center[0],
                location: response.body.features[0].place_name
            });
        }
    });
    
};


module.exports= geocode;
