const WebSocket = require("ws");

const headerConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

const wss = new WebSocket.Server({ port: 6666 });


wss.on("connection", (ws) => {
    console.log("connected")
    ws.on('message', (message) => {
        console.log(message)
      });
})
