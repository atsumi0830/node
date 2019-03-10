console.log('notes.js 作業開始');

fs = require('fs');
// module.exports.age = 25;
//
// module.exports.addNote = function () {
//     console.log('addNote');
//     return "new note";
// }

let addNote = (title, body) => {
    console.log('メモ追加', title, body);
    let notes = [];
    let note = {
        title,
        body
    };
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let showAll = () => {
    console.log('すべてのメモ表示');
};

let readNote = (title) => {
    console.log('個別メモ表示', title);
};

let removeNote = (title) => {
    console.log('メモ削除', title);
};


module.exports = {
    addNote,
    showAll,
    readNote,
    removeNote,
};