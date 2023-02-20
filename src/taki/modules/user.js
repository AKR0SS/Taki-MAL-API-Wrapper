const path = require('path');
const getRequest = require("../handlers/requestHandler");

function getUserAnimeList(baseUrl, apiKey, user) {
  return new Promise(async (resolve, reject) => {
    if (!user || typeof user !== 'string') return reject(new Error('[TAKI] Invalid user'));

    baseUrl.pathname += path.join('users', user, 'animelist');
    resolve(getRequest(baseUrl, apiKey))
  });
}

function getUserMangaList(baseUrl, apiKey, user) {
  return new Promise(async (resolve, reject) => {
    if (!user || typeof user !== 'string') return reject(new Error('[TAKI] Invalid user'));

    baseUrl.pathname += path.join('users', user, 'mangalist');
    resolve(getRequest(baseUrl, apiKey));
  });
}

module.exports = {
  getUserAnimeList,
  getUserMangaList
}