const express = require("express");
const footballRouter = express.Router();
const api = require("./api");

footballRouter.get("/", async (req, res) => {
  // console.log("router gets called");

  let fixtures = await api.useFootball();
  // console.log(fixtures);
  if (fixtures == null) {
    res.render("index", { fixturesData: fixtures });
  } else {
    res.render("index", { fixturesData: fixtures.response });
  }
});

module.exports = footballRouter;
