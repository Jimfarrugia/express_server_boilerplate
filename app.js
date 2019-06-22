const express = require("express");
const exphbs = require("express-handlebars");
const morgan = require("morgan");
const app = express();

// Handlebars view engine
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Body parser, get streams as json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Morgan
app.use(morgan("combined"));

// Routes from /routes
app.use(require("./routes"));

// Static assets
app.use(express.static("public"));

// Error handler
app.use(require("./middleware/error_handler_middleware"));

module.exports = app;