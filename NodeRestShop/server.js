const http = require('http');
const app= require('./app');
const chalk=require('chalk');

const port = process.env.port || 3000
const server= http.createServer(app);
server.listen(port);


const greenChalk=chalk.green;

console.log(greenChalk('Server is started and running on ','http://localhost:3000'));