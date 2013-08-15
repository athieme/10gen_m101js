//
//
//
var express = require("express");
var app = express();
app.get("/", function (req, res) {
    res.send("slash route\n");
});
app.get("*", function (req, res) {
    res.send("page not found\n", 404);
});
app.listen(1337);
console.log("express server started on http://localhost:1337");

