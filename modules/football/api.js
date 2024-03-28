const apiKey = process.env.FOOTBALL_API_KEY;

const date = require("luxon");

const dt = date.DateTime.local();
let todayDate = dt.toFormat("yyyy-MM-dd");

const useFootball = async () => {
  const url = `https://v3.football.api-sports.io/fixtures?date=${todayDate}`;
  let options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": apiKey,
    },
  };
  let res;
  try {
    res = await fetch(url, options);
    return res.json();
  } catch (err) {
    console.log(err);
    return null;
  }

  // sample data for testing in case max api calls is reached
  // const data = {
  //   response: [
  //     {
  //       fixture: {
  //         venue: {
  //           name: "venue 1",
  //           city: "Toronto",
  //         },
  //       },
  //       teams: {
  //         home: {
  //           name: "home team 1",
  //         },
  //         away: {
  //           name: "away team 1",
  //         },
  //       },
  //     },
  //     {
  //       fixture: {
  //         venue: {
  //           name: "venue 12",
  //           city: "Vancouver",
  //         },
  //       },
  //       teams: {
  //         home: {
  //           name: "home team 2",
  //         },
  //         away: {
  //           name: "away team 2",
  //         },
  //       },
  //     },
  //   ],
  // };
  // return data;
};

module.exports = {
  useFootball,
};
