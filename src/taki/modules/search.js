const path = require('path');
const getRequest = require("../handlers/requestHandler");

function animeSearch(baseUrl, apiKey, animeName) {
  return new Promise(async (resolve, reject) => {
    if (!animeName) return reject(new Error('[TAKI] Invalid animeName'));

    baseUrl.pathname += path.join('anime');
    baseUrl.searchParams.set('q', animeName);

    resolve(getRequest(baseUrl, apiKey));
  });
}

function mangaSearch(baseUrl, apiKey, mangaName) {
  return new Promise(async (resolve, reject) => {
    if (!mangaName) return reject(new Error('[TAKI] Invalid animeName'));

    baseUrl.pathname += path.join('manga');
    baseUrl.searchParams.set('q', mangaName);

    resolve(getRequest(baseUrl, apiKey));
  })
}

module.exports = {
  animeSearch,
  mangaSearch
}