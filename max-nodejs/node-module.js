const http = require("http");
const { buffer } = require("stream/consumers");
const routes = require("./routes.js");
const server = http.createServer(routes);

server.listen(3000);

// event loop, callstack, callback,
