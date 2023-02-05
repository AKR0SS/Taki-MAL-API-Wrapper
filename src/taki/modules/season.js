const getSeasonInfo = require('../handlers/seasonHandler');
const { checkClientKey } = require('../handlers/clientHandler');
const { getNext, getPrevious } = require('../handlers/pagingHandler');

/**
 * Promises an array of json data object provided an anime's NAME
 * @param {string} season
 * @param {number} year
 * @return {Promise} `Anime Season Model`
 */
function getSeason(season, year, sort) {
  /** 
   * Promises a json data object provided a username
   * @param {Object} data
   * @returns {Promise} `User Anime List Model`
   */
  getSeason.next = (data) => {
    return new Promise(async (resolve, reject) => {
      if (!data || typeof data !== 'object') return reject(new Error('[TAKI] Invalid Data'));
      if (!checkClientKey()) return reject(new Error('[TAKI] No MAL "CLIENT_KEY" provided'));
      if (!data.paging.next) return reject(new Error('[TAKI] Cannot access page that does not exist'));

      resolve(getNext(data));
    });
  };

  /** 
   * Promises a json data object provided a username
   * @param {Object} data
   * @returns {Promise} `User Anime List Model`
   */
  getSeason.previous = (data) => {
    return new Promise(async (resolve, reject) => {
      if (!data || typeof data !== 'object') return reject(new Error('[TAKI] Invalid Data'));
      if (!checkClientKey()) return reject(new Error('[TAKI] No MAL "CLIENT_KEY" provided'));
      if (!data.paging.previous) return reject(new Error('[TAKI] Cannot access page that does not exist'));

      resolve(getPrevious(data));
    });
  };

  return new Promise(async (resolve, reject) => {
    if (!year || typeof year !== 'number') return reject(new Error('[TAKI] Invalid Year'));
    if (!season || typeof season !== 'string') return reject(new Error('[TAKI] Invalid Season'));
    if (!checkClientKey()) return reject(new Error('[TAKI] No MAL "CLIENT_KEY" provided'));

    let data = await getSeasonInfo(season, year, sort);
    resolve(data);
  });
}

module.exports = {
  getSeason
}