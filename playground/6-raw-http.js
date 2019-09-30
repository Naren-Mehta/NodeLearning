

const https= require('https');

const weatherUrl = 'https://api.darksky.net/forecast/0a303a4b92790b15e6eba6fa5fe62836/40,-75';


const request= https.request(weatherUrl,(response)=>{


    let data='';

    response.on('data',(chunk)=>{
        data=data+chunk.toString();
    });

    response.on('end',()=>{
        const body = JSON.parse(data);
        console.log(body);
    });
});


request.on('error',(error)=>{
console.log('An error ', error);
});
request.end();