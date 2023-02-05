const getSearch = require("../handlers/searchHandler");
const { checkClientKey } = require('../handlers/clientHandler');
const { getNext, getPrevious } = require('../handlers/pagingHandler');

/**
 * Promises a json data object provided an anime's NAME
 * @param {string} name
 * @param {string} [fields]
 * @returns {Promise} `First Anime Search Model Data Element`
 */
function getInfoFromName(name, fields) {
  return new Promise(async (resolve, reject) => {
    if (!name || typeof name !== 'string') return reject(new Error('[TAKI] Invalid Name '));
    if (!checkClientKey()) return reject(new Error('[TAKI] No MAL "CLIENT_KEY" provided'));

    const data = await getSearch(name, fields);
    resolve(data.data[0]);
  });
}

/**
 * Promises an array of json data object provided an anime's NAME
 * @param {string} name
 * @param {string} [fields]
 * @return {Promise} `Anime Search Model`
 */
function search(name, fields) {
  /** 
   * Promises a json data object provided a username
   * @param {Object} data
   * @returns {Promise} `User Anime List Model`
   */
  search.next = (data) => {
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
  search.previous = (data) => {
    return new Promise(async (resolve, reject) => {
      if (!data || typeof data !== 'object') return reject(new Error('[TAKI] Invalid Data'));
      if (!checkClientKey()) return reject(new Error('[TAKI] No MAL "CLIENT_KEY" provided'));
      if (!data.paging.previous) return reject(new Error('[TAKI] Cannot access page that does not exist'));

      resolve(getPrevious(data));
    });
  };

  return new Promise(async (resolve, reject) => {
    if (!name || typeof name !== 'string') return reject(new Error('[TAKI] Invalid Name'));
    if (!checkClientKey()) return reject(new Error('[TAKI] No MAL "CLIENT_KEY" provided'));

    const data = await getSearch(name, fields);
    resolve(data);
  });
}

module.exports = {
  getInfoFromName,
  search
}