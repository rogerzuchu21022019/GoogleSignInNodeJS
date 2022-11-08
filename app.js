const express = require("express");
const mongoose = require("mongoose");
const path = require(`path`)
require("dotenv");
const passport = require("passport");
const session = require("express-session");
const PassportManage = require("./config/passport");

var app = express();
const PORT = process.env.PORT || 3000;

// Passport config

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

PassportManage(passport);

app.use(require("./routes/index"));
app.use("/auth", require("./routes/auth"));

app.listen(PORT, console.log(`listening at ${PORT}`));
