console.log('app.js 作業開始');

const fs = require('fs');
const os = require('os');
const yargs = require('yargs');
const argv = yargs.argv;


let user = os.userInfo();

let notes = require('./notes.js');

let result = notes.addNote();

let command = process.argv[2];
console.log("コマンド:", command);

console.log(argv);

// fs.appendFile('greeting.txt', 'hello! ' + user.username + 'さんは' + notes.age + '歳です。', function (err) {
//     if(err) {
//         console.log(err);
//     }
// });

if(command === 'add') {
    console.log('メモを追加');
} else if(command === 'list') {
    console.log('メモを一覧表示');
} else if(command === 'read') {
    console.log('メモを個別表示');
} else if(command === 'remove') {
    console.log('メモを削除');
}
