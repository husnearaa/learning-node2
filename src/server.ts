import { createServer, IncomingMessage, Server, ServerResponse } from "http";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;

    //console.log(req.url); // '/' or '/about' or '/contact'
    // console.log(req.method); // 'GET' or 'POST' or 'PUT' or 'DELETE'

    if (url === "/" && method === "GET") {
      // console.log("this is root route");

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Welcome to the root route" }));
    } else if (url?.startsWith("/products")) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Welcome to the products route" }));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Route not found" }));
    }
  },
);

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
