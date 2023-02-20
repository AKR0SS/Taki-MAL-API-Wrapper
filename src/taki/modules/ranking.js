const path = require('path');
const getRequest = require("../handlers/requestHandler");

function animeRank(baseUrl, apiKey) {
  return new Promise(async (resolve, reject) => {
    baseUrl.pathname += path.join('anime', 'ranking');
    resolve(getRequest(baseUrl, apiKey))
  });
}

function mangaRank(baseUrl, apiKey) {
  return new Promise(async (resolve, reject) => {
    baseUrl.pathname += path.join('manga', 'ranking');
    resolve(getRequest(baseUrl, apiKey));
  });
}

module.exports = {
  animeRank,
  mangaRank
}