import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 3000 });

wss.on("connection", function connection(ws) {
  console.log("Client connected!");

  ws.on("error", console.error);

  ws.on("message", function message(data) {
    const payload = {
      type: "Custom-Type",
      data: data.toString().toUpperCase(),
    };
    // ws.send(JSON.stringify(payload));

    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(payload), { binary: false });
      }
    });
  });

  // ws.send("Hola desde el servidor");
  // setInterval(() => {
  //   ws.send("Hola de nuevo");
  // }, 2000);

  ws.on("close", () => {
    console.log("Client disconnected!");
  });
});

console.log("Server in runnig on port http://localhost:3000");
