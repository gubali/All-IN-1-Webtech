const http = require('http');
const fs = require('fs');
const server = http.createServer(function (req, res) {
    const path = req.url;
    const method = req.method;
    const log = `\n[${new Date().toLocaleString()}] : ${method} ${path}`;
    fs.appendFile('log.txt', `${log}`, 'utf-8', () => {
    });
    switch (method) {
        case 'GET': {
            switch (path) {
                case '/':
                    res.writeHead(200).end('Hello server!!');
                    return;
            }
        }
            break
        case 'POST': {
            switch (path) {
                case '/tweet':
                    return res.writeHead(201).end('tweet created');
            }
        }
            break
    }
    return res.writeHead(400).end('you lost');
});

server.listen('9000', function () {
    console.log(`server listen at 9000`);

})