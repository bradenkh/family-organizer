const path = require("path");
const express = require("express");
const Server = require("http");

const PORT = process.env.PORT || 5000; //for heroku or firebase

const app = express();

// app settings
app.set("view engine", "ejs");
app.set("views", "views");

//routes
const homeRoutes = require("./routes/home");
const timeRoutes = require("./routes/time");

//use routes
app.use(homeRoutes).use(timeRoutes);

// 404 Handling
const errorController = require("./controllers/error");
app.use(errorController.get404);

app.listen(PORT);
