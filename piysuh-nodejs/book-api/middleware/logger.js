const fs = require('node:fs')
function loggeerMIddleWAre(req, res, next) {
    const logFile = `[\n${Date.now()}] ${req.method} ${req.path}`;
    fs.appendFileSync('log.txt', logFile, 'utf-8');
    next();
};
module.exports = loggeerMIddleWAre;