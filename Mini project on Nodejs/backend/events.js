const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const emitter = new MyEmitter();

emitter.on("userLogin", (user) => {
  console.log(` Event: User Logged In → ${user}`);
});

emitter.on("dataFetched", () => {
  console.log(" Event: Users Data Fetched");
});

module.exports = emitter;
