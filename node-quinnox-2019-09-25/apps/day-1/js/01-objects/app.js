var person = new Object();


// Dot opeator assignment for an object
// person.firstname='Naren';
// person.lastname='mehta';

// Array assignment
person["firstname"] = "John";
person["lastname"] = "Doe";

var firstNameProperty = "lastname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

// person.address = new Object();
// person.address.street = "111 Main St.";
// person.address.city = "New York";
// person.address.state = "NY";

// console.log(person.address.street);
// console.log(person.address.city);
// console.log(person["address"]["state"]);
