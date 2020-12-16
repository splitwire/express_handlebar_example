"use strict";

const express = require("express");

const hbs = require("express-handlebars");

const homeRoute = require("./routes/home");

const app = express();

app.engine(
  "hbs",
  hbs({
    extname: ".hbs",
    defaultLayout: "main",
    layoutDir: `${__dirname}/views/layout`,
    partialsDir: `${__dirname}/views/partials`,
  })
);

app.set("view engine", "hbs");

app.use(homeRoute);

app.listen(3000);
