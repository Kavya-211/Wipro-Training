var express = require("express");
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();

app.use(cookieParser());

// Uncomment if you want session support
// app.use(session({
//   secret: 'sample-secretkey',
//   resave: false,
//   saveUninitialized: false
// }));

app.get("/", (req, res) => {
  res.cookie('mycookie', 'jaya');
  console.log("cookies on server:", req.cookies);
  res.send(`Cookie has been set. Current cookie value is: ${req.cookies.mycookie}`);
});

app.get("/getcookie", (req, res) => {
  console.log("cookies on server:", req.cookies);
  res.send(`Cookie value is: ${req.cookies.mycookie}`);
});

app.listen(4001, () => console.log("Server started on port 4001"));
