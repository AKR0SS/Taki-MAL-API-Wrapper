const getInfo = require("../handlers/infoHandler");
const { checkClientKey } = require('../handlers/clientHandler');

/**
 * Promises a json data object provided an anime's ID
 * @param {number} AnimeId
 * @returns {Promise} `Anime Info Model`
 */
function getInfoFromId(animeId) {
  return new Promise((resolve, reject) => {
    if (!animeId || typeof animeId !== 'number') return reject(new Error('[TAKI] Invalid ID'));
    if (!checkClientKey()) return reject(new Error('[TAKI] No MAL "CLIENT_KEY" provided'));

    resolve(getInfo(animeId));
  });
}

/**
 * Promises a json data object provided an anime's MAL URL
 * - this is for lazy ppl like myself who don't want to parse an entered URL in my code
 * @param {string} url 
 * @returns {Promise} `Anime Info Model`
 */
function getInfoFromURL(url) {
  return new Promise((resolve, reject) => {
    if (!url || typeof url !== 'string' || !url.toLowerCase().includes('https://myanimelist.net/')) return reject(new Error('[TAKI] Invalid URL'));
    if (!checkClientKey()) return reject(new Error('[TAKI] No MAL "CLIENT_KEY" provided'));

    const split = url.split('/');
    const animeId = split[4];

    resolve(getInfo(animeId));
  });
}

module.exports = {
  getInfoFromId,
  getInfoFromURL
};