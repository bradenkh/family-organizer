const express = require("express");
const Server = require("http");

//used for prove 05

const PORT = process.env.PORT || 5000;

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.listen(PORT);


