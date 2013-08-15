//
//
//
var Client = require("mongodb").MongoClient;
var Server = require("mongodb").Server;
var express = require("express");
var cons = require("consolidate");

var app = express();
app.engine("html", cons.swig);
app.set("view engine", "html");
app.set("views", __dirname + "/views");

var client = new Client(new Server("localhost", 27017, { "native_parser": true  }));

var db = client.db("test");

app.get("/", function (req, res) {
    db.collection("coll").findOne({}, function (err, doc) {
        if (err) throw err;
        res.render("hello", doc);
    });
});
app.get("*", function (req, res) {
    res.send("page not found\n", 404);
});

client.open(function (err, client) {
    if (err) throw err;
    app.listen(1337);
    console.log("express server started on http://localhost:1337");
});


