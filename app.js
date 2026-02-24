const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");

//set the view engine and define the views location
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//middleware to parse form input entry data into the request
app.use(express.urlencoded({ extended: true }));

//use a specific router for specific route, here just a router for any root prefacing routes
app.use("/", indexRouter);

//set the server to run on port 3001
app.listen(3001);
