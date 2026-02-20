const http = require("http");
const router = require("./router");
const logRequest = require("./logger");

const server = http.createServer((req, res) => {
  logRequest(req.method, req.url); 
  router(req, res);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
