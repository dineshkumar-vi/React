var express = require("express");
var app = express();
var morgan = require("morgan");

const isDev = process.env.NODE_ENV === "development";

app.use(morgan("combined"));
app.use(express.static( __dirname + "/dist"));
app.get("*", function(req, res){
  res.sendFile(__dirname + "/dist/index.html");
});

// Serve static HTML folder from dist for QA validation
if(isDev) {
  app.get("/html", function(req, res){
    res.sendFile(__dirname + "/dist/html/index.html");
  });
}

app.listen(process.env.PORT || 4000);
