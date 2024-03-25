const apiKey = "5660bf8eb9d6acb8c94d79ed2f2d755f";

//functions

async function getCityWeather(_cityName) {
  let cityName = _cityName;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  return await fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return null;
    });
}

module.exports = {
  getCityWeather,
};
