const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");

//set the engine and define the views location
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(3001);
