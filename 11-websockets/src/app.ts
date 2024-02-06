import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 3000 });

wss.on("connection", function connection(ws) {
  console.log("Client connected!");

  ws.on("error", console.error);

  ws.on("message", function message(data) {
    const payload = {
      type: "Custom-Type",
      data: data.toString(),
    };
    // ws.send(JSON.stringify(payload));
    const dataString = JSON.stringify(payload);
    //todos Incluyente
    // wss.clients.forEach(function each(client) {
    //   if (client.readyState === WebSocket.OPEN) {
    //     client.send(dataString, { binary: false });
    //   }
    // });

    // todos Excluyente
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(dataString, { binary: false });
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
