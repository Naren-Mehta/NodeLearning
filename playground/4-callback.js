

setTimeout( () => {
    console.log('Two seconds are up.');
}, 2000);

console.log('call back functions');

const names= ['Andrew','jen','Jess'];
const shortNames = names.filter((name) => {
    return name.length <=4;
});

console.log(shortNames);

const geoCode= (address, callback)=>{
    
    setTimeout(()=>{
        const data ={
            latitude : 0,
            longitude :0
        }
        callback(data);
    },4000);
    
   
};

geoCode('Bengaluru',(myData)=>{
    console.log(myData);
});


const add = (x,y, callback) =>{
    setTimeout(()=>{
        callback(x+y);
    },3000);

}

add(10,20, (sum)=>{
    console.log('sum= '+sum);
});


