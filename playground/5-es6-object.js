//object property shorthand

const name = 'Andrew';
const userAge = 27

const user={
    name:name,
    userAge:userAge
}

console.log(user);


//object destructuring

const product ={
    label :'Red notebook',
    price:3,
    stock:201,
    salePrice: undefined
}

// const label= product.label;
// const stock= product.stock;

const {label, stock} =product;

console.log(label,stock);


