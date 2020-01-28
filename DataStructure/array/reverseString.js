

function reverse(str){
    

    if(!str || str.length <2 || typeof str !== 'string'){
        return 'Str is not a valid string';
    }

    var arrLength= str.length-1;
    var revStr='';
    for(var i=arrLength;i>=0;i--){
        revStr +=str.charAt(i);
    }
    return revStr;
}

function reverse2(str){
    return str.split('').reverse().join('');
}

const reverse3 = str => str.split('').reverse().join('');

console.log(reverse3('hello'));
