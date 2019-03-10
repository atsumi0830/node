console.log('app.js 作業開始');

const fs = require('fs');
const os = require('os');
const yargs = require('yargs');
const notes = require('./notes.js');

let argv = yargs.argv;
let command = argv._[0];

// fs.appendFile('greeting.txt', 'hello! ' + user.username + 'さんは' + notes.age + '歳です。', function (err) {
//     if(err) {
//         console.log(err);
//     }
// });

if(command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if(command === 'list') {
    notes.showAll();
} else if(command === 'read') {
    notes.readNote(argv.title);
} else if(command === 'remove') {
    notes.removeNote(argv.title);
}
