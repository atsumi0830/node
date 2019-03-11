const yargs = require('yargs');
const notes = require('./notes.js');

let argv = yargs.argv;
let command = argv._[0];

//　コマンドごとに処理を分岐
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
    let allNotes = notes.showAll();
    console.log(`表示数: ${allNotes.length}`);
    allNotes.forEach(note => notes.logNotes(note));
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
