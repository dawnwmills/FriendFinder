//DEPENDENCIES

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");



//EXPRESS CONFIGURATION

var app = express();
var PORT = process.env.PORT || 3000;

//BodyParser for the server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//LINK TO JS page within HTML files
app.use(express.static(path.join(__dirname, "app", "public")));


//ROUTER to external route files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//LISTENER
//starts the server

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT + "!");
});