const express = require("express");
const app = express();
// app.use(express.static("public"));
var path = require("path");
const bodyParser = require("body-parser");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/webhooks/inbound-message", (req, res) => {
  console.log(req.body);
  res.status(200).end();
});

app.post("/webhooks/message-status", (req, res) => {
  console.log(req.body);
  res.status(200).end();
});

app.listen(3000);
