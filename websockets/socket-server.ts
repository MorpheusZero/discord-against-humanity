import { WebSocketServer } from "ws";

export class SocketServer {
  public static InitializeSocketServer() {
    const wss = new WebSocketServer({ port: 9190 });

    wss.on("connection", (ws: any) => {
      ws.on("error", console.error);

      ws.on("message", function message(message: string) {
        console.log("received: %s", message);
      });

      ws.send("A SUPER SECRET MESSAGE");
    });
  }
}
