const express = require("express");
const Router = express.Router();
const footballApi = require("./football/api");
const weatherApi = require("./weather/api");

Router.get("/", async (req, res) => {
  // console.log("router gets called");

  let fixtures = await footballApi.useFootball();
  // console.log(fixtures);
  if (fixtures == null) {
    res.render("index", { fixturesData: fixtures });
  } else {
    res.render("index", { fixturesData: fixtures.response });
  }
});

Router.get("/:cityName", async (req, res) => {
  let weatherData = await weatherApi.getCityWeather(req.params.cityName);
  if (weatherData == null) {
    res.render("weather", { weatherData: "Could not be fetched by API" });
  } else {
    res.render("weather", { weatherData: weatherData.main.temp });
  }
});

module.exports = Router;
