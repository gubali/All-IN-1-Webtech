const fs = require('fs');
//const fileContent = fs.readFileSync('notes.txt', 'utf-8');
//console.log(fileContent);
//fs.appendFileSync('copy.txt', '\n\n My file dat!!!!!!!','utf-8')
fs.mkdirSync('games/xyz', { recursive: true });
//sync => blocking operation
const localContents = fs.readFileSync('copy.txt', 'utf-8');
//console.log(localContents);

// async => non-blocking
fs.readFile('copy.txt', 'utf-8', function (error, data) {
    if (error) console.log(error);
    else console.log('no content', data);
})
