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

    //notes-data.json　ファイルがなかった場合スルー
    try {
        let notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch(e) {

    }

    //重複しているtitleがあった場合スルー
    let duplicatedNotes = notes.filter(note => note.title === title);

    if(duplicatedNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
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