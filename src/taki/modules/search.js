const path = require('path');
const getRequest = require("../handlers/requestHandler");

function animeSearch(baseUrl, apiKey, animeName, limit) {
  return new Promise(async (resolve, reject) => {
    if (limit < 1 || limit > 100) return reject(new Error('[TAKI] Invalid limit size'));
    if (!animeName) return reject(new Error('[TAKI] Invalid animeName'));

    baseUrl.pathname += path.join('anime');
    baseUrl.searchParams.set('q', animeName);
    baseUrl.searchParams.set('limit', limit);

    resolve(getRequest(baseUrl, apiKey));
  });
}

function mangaSearch(baseUrl, apiKey, mangaName, limit) {
  return new Promise(async (resolve, reject) => {
    if (limit < 1 || limit > 100) return reject(new Error('[TAKI] Invalid limit size'));
    if (!mangaName) return reject(new Error('[TAKI] Invalid animeName'));

    baseUrl.pathname += path.join('manga');
    baseUrl.searchParams.set('q', mangaName);
    baseUrl.searchParams.set('limit', limit);

    resolve(getRequest(baseUrl, apiKey));
  })
}

module.exports = {
  animeSearch,
  mangaSearch
}