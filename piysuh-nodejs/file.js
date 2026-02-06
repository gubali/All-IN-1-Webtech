const fs = require("fs");

// sync
//fs.writeFileSync('./test.txt', 'Hell node js developer');

//Async
// fs.writeFile('./test.txt', "Hello Aync", (err) => {
//     console.error("erroe occured", err)
// });
// console.log("File has been created!");


// const rslt = fs.readFileSync('./contact.txt', "utf-8");
// console.log(rslt);

try {
    const timestamp = new Date().toLocaleString();
    fs.appendFile("./test.txt", `${timestamp}Hey there\n`, (err) => {
        if (err) {

            console.error("Errror appending file", err);
        }
        else {
            console.log("Successfully appended!");
        }

    });
}
catch (err) {
    console.error("Errror appending file", err);
}

//fs.cpSync('./test.txt', "./copy.txt");
//fs.unlinkSync("./copy.txt");

console.log(fs.statSync("./test.txt").isFile());
fs.mkdir("my-dics/a",{recursive:true}, (err) => {
    if (err) {
        console.log(err);
    }
});
