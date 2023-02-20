const path = require('path');
const getRequest = require("../handlers/requestHandler");

function season(baseUrl, apiKey, season, year) {
  return new Promise(async (resolve, reject) => {
    baseUrl.pathname += path.join('anime', 'season', year.toString(), season);
    resolve(getRequest(baseUrl, apiKey))
  });
}

module.exports = {
  season
}