const fs = require("fs");

function logRequest(method, url) {
  const log = `${new Date().toISOString()} - ${method} ${url}\n`;
  fs.appendFile("logs.txt", log, (err) => {
    if (err) console.error("Log error:", err);
  });
}

module.exports = logRequest;
