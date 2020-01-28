

// Objects stores as Hashtable

let user={
    age:54,
    name:'Naren',
    magic:true,
    scream: function (){
        console.log("Inside method");
    },
    name:'singh',
    magic:false
}

console.log(user.age); // O(1)
console.log(user.name); // O(1)
console.log(user.magic); // O(1)