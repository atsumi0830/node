console.log('notes.js 作業開始');

fs = require('fs');
// module.exports.age = 25;
//
// module.exports.addNote = function () {
//     console.log('addNote');
//     return "new note";
// }


// notes-data.json 読み込み処理  ファイルがなかった場合スルー
let fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(e) {
        return [];
    }
};


// 保存処理
let saveNotes = notes => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    };

    //重複しているtitleがあった場合スルー
    let duplicatedNotes = notes.filter(note => note.title === title);

    if(duplicatedNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
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