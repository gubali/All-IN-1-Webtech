const http = require('http');
const fs = require('fs');
const url = require('url');
const myServer = http.createServer((req, res) => {
    const timestamp = Date.now().toLocaleString()
    //console.log(req.headers);
    if (req.url === '/favicon.ico') return res.end();
    const log = `${timestamp}: ${req.method} ${req.url} New Req received!\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile('log.txt', log, (err, data) => {
        switch (myUrl.pathname) {
            case '/': res.end('hello from server')
                break;
            case '/about':
                const userName = myUrl.query.name;
                res.end(`Hi, ${userName}`);
                break;
            case '/signup':
                res.end('sig up form');
                break;
            default:
                res.end("404 not found!");
        }

    });
});

myServer.listen(8000, () => console.log("Server started!"))