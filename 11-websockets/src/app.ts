import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 3000 });

wss.on("connection", function connection(ws) {
  console.log("Client connected!");

  ws.on("error", console.error);

  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });

  ws.send("Hola desde el servidor");
  setInterval(() => {
    ws.send("Hola de nuevo");
  }, 2000);
});

console.log("Server in runnig on port http://localhost:3000");
