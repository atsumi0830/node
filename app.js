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
    let note = notes.addNote(argv.title, argv.body);
    // 成功したかどうかメッセージを表示
    if(note) {
        console.log('保存されました');
        notes.logNotes(note);
    } else {
        console.log('タイトルが重複しています。');
    }
} else if(command === 'list') {
    notes.showAll();
} else if(command === 'read') {
    let note = notes.readNote(argv.title);
    if(note) {
        console.log('見つかりました。');
        notes.logNotes(note);
    } else {
        console.log('見つかりませんでした。');
    }
} else if(command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? '削除が完了しました。' : '見つかりませんでした';
    console.log(message);
}
