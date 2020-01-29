// where all our main socket stuff will go
const { io } = require("../servers");
const Orb = require("./classes/Orb");

let orbs = [];

initGame();

io.on("connect", socket => {
  socket.emit("init", {
    orbs
  });
});

function initGame() {
  for (let i = 0; i < 500; i++) {
    orbs.push(new Orb());
  }
}

module.exports = io;
