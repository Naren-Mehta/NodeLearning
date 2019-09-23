
const validator = require('validator')
const chalk= require('chalk')
const yargs= require('yargs');

const add = require('./utills.js');
const devision = require('./test.js');


// console.log(add(10,20));
// console.log(devision(10,20));

// console.log(validator.isEmail('example.com'));

// console.log(validator.isURL('https://github.com/Naren-Mehta?tab=repositories'));

// const greenMsg= chalk.red.inverse.bold('Error!');
// console.log(greenMsg);
// console.log(chalk.green('Success!'));


const command= process.argv[2];

// console.log(process.argv);

yargs.version('1.1.0');

yargs.command({
    command:'add',
    describe:'Add a new note',
    handler: function(){
        console.log('Adding a new note!');
    }
});

yargs.command({
    command:'remove',
    describe:'Remove a new note',
    handler: function(){
        console.log('Removeing a note!');
    }
});

yargs.command({
    command:'list',
    describe:'List of note',
    handler: function(){
        console.log('Showing list of node!');
    }
});

yargs.command({
    command:'read',
    describe:'Read a note',
    handler: function(){
        console.log('Reading a note!');
    }
});

console.log(yargs.argv);




























// if(command === 'add'){
//     console.log('Addition');
// }else if (command === 'remove'){
//     console.log('Remove');

// }
// else{
//     console.log('No Action');
// }

