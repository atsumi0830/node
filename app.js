console.log('app.js 作業開始');

const fs = require('fs');
const os = require('os');

let user = os.userInfo();

let notes = require('./notes.js');

let result = notes.addNote();


fs.appendFile('greeting.txt', 'hello! ' + user.username + 'さんは' + notes.age + '歳です。', function (err) {
    if(err) {
        console.log(err);
    }
});
