const EventEmitter = require('events');
const eventEmit = new EventEmitter();

eventEmit.on('error',(err)=>{
    console.error(`Error occured ${err}`);
})
eventEmit.on('greet', (user) => {
    console.log(`event log, ${user}`)
})
eventEmit.on('greet', (user) => {
    console.log(`Im eager to learn, ${user}`)
})
//console.log(EventEmitter);
eventEmit.once('welcome', () => {
    console.log('run only once');
})
// event emit
 eventEmit.emit('greet', "asif")
 eventEmit.emit('greet', "Node js")
// eventEmit.emit('welcome');
// eventEmit.emit('welcome');
const myListener = () => console.log(`Im event listener`);
eventEmit.on('test', myListener);
eventEmit.emit("test");
eventEmit.emit("test");
eventEmit.emit("test");
console.log(eventEmit.listeners("greet"));
eventEmit.emit('error', new Error('something went wrong'));
