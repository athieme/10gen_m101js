//
//
//
var express = require("express");
var cons = require("consolidate");

var app = express();
app.engine("html", cons.swig);
app.set("view engine", "html");
app.set("views", __dirname + "/views");
app.use(express.bodyParser());
app.use(app.router);

app.use(function (err, req, res, next) {
    console.error(err.message);
    console.error(err.stack);
    res.status(500);
    res.render("error", { error: err });
});

app.get("/", function (req, res, next) {
    res.render("form", { "fruits": [ "apple", "orange", "banana", "peach"] });
});

app.post("/favorite", function (req, res, next) {
    var favorite = req.body.fruit;
    if (typeof favorite == "undefined") {
        next(Error("Please choose a fruit!"));
    } else {
        res.render("fruit", {fruit: favorite});
    }
});

app.listen(1337);
console.log("server started on http://localhost:1337");
