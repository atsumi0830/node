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

//ログをモジュール化
let logNotes = note => {
    console.log('------------');
    console.log(`タイトル: ${note.title}`);
    console.log(`内容: ${note.body}`);
};


// 保存処理
let saveNotes = notes => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

//追加処理
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

//　一覧表示
let showAll = () => {
    return fetchNotes();
};

//　個別表示
let readNote = (title) => {
    //既存のデータを取得
    let notes = fetchNotes();
    //引数を元、検索に引っかかった場合削除処理
    let filteredNotes = notes.filter(note => note.title === title);
    //検索で引っかかった値を返す
    return filteredNotes[0];
};

// 削除処理
let removeNote = (title) => {
    //既存のデータを取得
    let notes = fetchNotes();
    //引数を元、検索に引っかかった場合削除処理
    let filteredNotes = notes.filter(note => note.title !== title);
    //削除後のデータを保存
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};


module.exports = {
    addNote,
    showAll,
    readNote,
    removeNote,
    logNotes
};
