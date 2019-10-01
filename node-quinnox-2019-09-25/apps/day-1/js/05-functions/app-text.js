

// var abc= function(){
//     console.log("===var abc=====");
// }

// function abc(){
//     console.log("===abc method==");
//     return "Inside abc";
// }



// console.log(abc());


// function log(a){
//     a();
// }


// log(function(){
//     console.log("Callback function: Pass function inside a function");
// });




function test(x){
    console.log('x= '+x);
     return function(y){
        console.log('y= '+y);
        return x+y;
     };
};


const result =  test(10);
console.log(result);

// 1000


result(50);





// console.log(test()());












