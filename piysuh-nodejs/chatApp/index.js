const ChatRoom = require('./chatRoom.js');
const chat = new ChatRoom();
chat.on('join', (user) => {
    console.log(`${user} has joined`);
});

chat.on('message', (user, message) => {
    console.log(`${user} : ${message}`);
});
chat.on('leave', (user) => {
    console.log(`${user} left the chat`);
});

chat.join('asif');
chat.join('haniya');
chat.sendMessage('asif', 'hey asif, how are you!');
chat.sendMessage('haniya', 'hey haniay, how are you!');
chat.leave('asif');
chat.sendMessage("asif", 'message would not send');
chat.leave('asif')
