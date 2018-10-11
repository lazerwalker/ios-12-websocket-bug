const express = require("express");
const WebSocket = require("ws");
const http = require("http");

const app = express();

const simpleSocketClient = `
<html>
<body>
Hello World! 
<script type='text/javascript'>
var ws = new WebSocket('ws://' + window.location.hostname + ':12345');
ws.addEventListener('open', function(e) {
  ws.send("Hi server!")
});
  
ws.addEventListener('message', function(e) {
  console.log("Received event:", e);
});
console.log("JS")
</script>
</body>
</html>
`;

app.get("/", (req, res) => res.send(simpleSocketClient));

const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server, port: 12345 });

wss.on("connection", ws => {
  //connection is up, let's add a simple simple event
  ws.on("message", message => {
    //log the received message and send it back to the client
    console.log(`received: ${message}`);
    ws.send(`Hello, you sent -> ${message}`);
  });

  //send immediatly a feedback to the incoming connection
  ws.send("Hi there, I am a WebSocket server");
});

//start our server
server.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${server.address().port} :)`);
});
