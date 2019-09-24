const express= require('express');
const app = express();

const productRoutes= require('./api/routes/product');

const ordeRoutes= require('./api/routes/order');

app.use('/orders',ordeRoutes);
app.use('/products',productRoutes);

module.exports= app;