const express = require("express");
const weatherRouter = express.Router();
const api = require("./api");

weatherRouter.get("/:cityName", async (req, res) => {
  let weatherData = await api.getCityWeather(req.params.cityName);
  // console.log(weatherData);
  res.render("weather", { weatherData: weatherData });
});

module.exports = weatherRouter;
