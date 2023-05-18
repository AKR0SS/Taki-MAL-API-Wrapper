const path = require('path');
const getRequest = require('../handlers/requestHandler');

function getUserAnimeList(baseUrl, apiKey, user, limit, status, sort) {
  return new Promise(async (resolve, reject) => {
    const statusTypes = ['watching', 'completed', 'on_hold', 'dropped', 'plan_to_watch'];
    const sortTypes = ['list_score', 'list_updated_at', 'animetitle', 'anime_start_date'];

    if (limit < 1 || limit > 1000) return reject(new Error('[TAKI] Invalid limit size'));
    if (!statusTypes.includes(status)) return reject(new Error('[TAKI] Invalid status type'));
    if (!sortTypes.includes(sort)) return reject(new Error('[Taki] Invalid sorting type'))
    if (!user || typeof user !== 'string') return reject(new Error('[TAKI] Invalid user'));

    baseUrl.pathname += path.join('users', user, 'animelist');
    baseUrl.searchParams.append('limit', limit);
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