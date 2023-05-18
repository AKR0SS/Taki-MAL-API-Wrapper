const path = require('path');
const getRequest = require("../handlers/requestHandler");

function animeSeason(baseUrl, apiKey, season, year, limit) {
  return new Promise(async (resolve, reject) => {
    baseUrl.pathname += path.join('anime', 'season', year.toString(), season);
    baseUrl.searchParams.set('limit', limit);
    
    resolve(getRequest(baseUrl, apiKey))
  });
}

module.exports = {
  animeSeason
}