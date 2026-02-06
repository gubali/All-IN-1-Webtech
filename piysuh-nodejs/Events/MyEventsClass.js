const EventEmitter = require("events");

class Chat extends EventEmitter {
    sendMessage(msg) {
        console.log(`Message sent : ${msg}`);
        this.emit('MessageRecvd:', msg);
    }
}
const chat = new Chat();
chat.on("MessageRecvd", (msg) => {
    console.log(`New message ${msg}`);
});
chat.sendMessage("Hello, asif");