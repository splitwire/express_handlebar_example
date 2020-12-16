const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  res.locals.name = "My Name";

  next();
});

router.get("/", (req, res, next) => {
  res.render("home");
});

module.exports = router;
