const express = require("express");
const Server = require("http");

const PORT = process.env.PORT || 5000; //for heroku or firebase

const app = express();

// app settings
app.set("view engine", "ejs");
app.set("views", "views");

//routes
const timeRoutes = require("./routes/time");
const errorController = require("./controllers/error");
const exp = require("constants");

//use routes
// app.use(express.static(path.join(__dirname, "public")));
app.use(timeRoutes);
app.use(errorController.get404);

app.listen(PORT);
