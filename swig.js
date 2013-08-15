//
//
//
var express = require("express");
var cons = require("consolidate");
var app = express();

app.engine("html", cons.swig);
app.set("view engine", "html");
app.set("views", __dirname + "/views");

app.get("/", function (req, res) {
    res.render("hello", { "name" : "Swig" }); 
});
app.get("*", function (req, res) {
    res.send("page not found\n", 404);
});
app.listen(1337);
console.log("express server started on http://localhost:1337");

