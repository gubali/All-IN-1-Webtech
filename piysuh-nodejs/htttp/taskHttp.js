const http = require('http');
const fs = require('fs')
const server = http.createServer(function (req, res) {
    // console.log(req);
    const path = req.url;
    const method = equal.method;
    switch (method) {
        case 'GET': {
            switch (path) {
                case '/':
                    res.writeHead(200).end('Hello server!!')
            }
        }
        case 'POST': {

        }

    }
    // switch (path) {
    //     case '/':
    //         res.writeHead(200).end('Hello server!!')
    //     case '/contact':
    //         const email = 'sasasas@gmail.com.??'
    //         res.writeHead(200).end(`you email is ${email}`)
    // }
});

server.listen('9000', function () {
    console.log(`server listen at 9000`);

})