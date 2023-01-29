const getSeasonInfo = require('../handlers/seasonHandler');
const { checkClientKey } = require('../handlers/clientHandler');

/**
 * Promises an array of json data object provided an anime's NAME
 * @param {string} season
 * @param {number} year
 * @return {Promise} `Anime Season Model`
 */
function getSeason(season, year) {
  return new Promise(async (resolve, reject) => {
    if (!year || typeof year !== 'number') return reject(new Error('[TAKI] Invalid Year'));
    if (!season || typeof season !== 'string') return reject(new Error('[TAKI] Invalid Season'));
    if (!checkClientKey()) return reject(new Error('[TAKI] No MAL "CLIENT_KEY" provided'));

    let data = await getSeasonInfo(season, year);
    resolve(data);
  });
}

module.exports = {
  getSeason
}