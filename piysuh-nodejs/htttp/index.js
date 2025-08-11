const http = require('node:http');
const server = http.createServer(function (req, res) {
    // console.log('got incoming request!');
    // res.writeHead(200);
    switch (req.url) {
        case '/':
            return res.end("Welcome to homepage!")
         case '/about':
            return res.end('About Us')
        case '/contact':
            return res.end('Contact USe')
        default:
            res.writeHead(404);
            res.end('You lost!')

    }
    // console.log(req.headers.authorization);
    // console.log(req.method);
    // res.writeHead(200)
    // res.end(`Current Date and time now is ${new Date().toDateString()} ${new Date().toLocaleTimeString()} `);
}


);
server.listen(8000, function () {
    console.log(`http server up on port 8000`);

});
/*

header {
Content-Type: 'application/json',
Authorization: 'Token',
user-agent:Mac
}
**/