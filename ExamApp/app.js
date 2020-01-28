// app.js

const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/productDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, db) => {
  if (err) {
    console.error(err)
    return
  }

  console.log("===DB connected===");
})



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});