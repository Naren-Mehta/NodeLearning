const geocode= require('./utills/geocode');
const weather = require('./utills/weather');

geocode('pithoragarh', (error,data)=>{
    console.log(errorChalk('Error ', error));
    console.log('Data ', data);

});

weather('29.58','80.22',(error, data)=>{
    console.log(errorChalk('Error ', error));
    console.log('Data ', data);
})