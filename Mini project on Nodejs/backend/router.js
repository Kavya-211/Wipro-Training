const fs = require("fs");
const path = require("path");
const emitter = require("./events");
const usersPath = path.join(__dirname, "users.json");
const htmlPath = path.join(__dirname, "public", "index.html");

// PROMISE 
function readUsersPromise() {
  return new Promise((resolve, reject) => {
    fs.readFile(usersPath, "utf-8", (err, data) => {
      if (err) reject(err);
      else resolve(JSON.parse(data));
    });
  });
}

// ASYNC
async function readUsersAsync() {
  const data = await fs.promises.readFile(usersPath, "utf-8");
  return JSON.parse(data);
}

async function router(req, res) {

  // Serve UI
  if (req.url === "/" && req.method === "GET") {
    try {
      const html = fs.readFileSync(htmlPath, "utf-8");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(html);
    } catch (err) {
      res.writeHead(500);
      res.end("Error loading page");
    }
  }

  // Health Check
  else if (req.url === "/health" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify("Health check is ok"));
  }

  // Login Event
  else if (req.url === "/login" && req.method === "POST") {
    emitter.emit("userLogin", "DemoUser");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify("User logged in"));
  }

  // Get Users
  else if (req.url === "/users" && req.method === "GET") {
    try {
      const users = await readUsersPromise();   // Promise used
      emitter.emit("dataFetched");              // Event emitted
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(users));
    } catch (err) {
      res.writeHead(500);
      res.end("Server Error");
    }
  }

  else {
    res.writeHead(404);
    res.end("Not Found");
  }
}

module.exports = router;
