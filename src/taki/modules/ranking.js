const path = require('path');
const getRequest = require("../handlers/requestHandler");

function animeRank(baseUrl, apiKey, rankingType, limit) {
  return new Promise(async (resolve, reject) => {
    const rankTypes = ['all', 'airing', 'upcoming', 'tv', 'ova', 'movie', 'special', 'bypopularity', 'favorite'];
    if (!rankTypes.includes(rankingType)) return reject(new Error('[TAKI] Invalid rankingType'));
    if (limit < 1 || limit > 500) return reject(new Error('[TAKI] Invalid limit size'));

    baseUrl.pathname += path.join('anime', 'ranking');
    baseUrl.searchParams.set('limit', limit);
    resolve(getRequest(baseUrl, apiKey))
  });
}

function mangaRank(baseUrl, apiKey, rankingType, limit) {
  return new Promise(async (resolve, reject) => {
    const rankTypes = ['all', 'manga', 'novels', 'oneshots', 'doujin', 'manhwa', 'manhua', 'bypopularity', 'favorite'];
    if (!rankTypes.includes(rankingType)) return reject(new Error('[TAKI] Invalid rankingType'));
    if (limit < 1 || limit > 500) return reject(new Error('[TAKI] Invalid limit size'));

    baseUrl.pathname += path.join('manga', 'ranking');
    resolve(getRequest(baseUrl, apiKey));
  });
}

module.exports = {
  animeRank,
  mangaRank
}