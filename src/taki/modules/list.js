const { checkClientKey } = require('../handlers/clientHandler');
const getList = require('../handlers/listHandler');
const { getNext, getPrevious } = require('../handlers/pagingHandler');

/**
 * Promises a json data object provided a username
 * @param {String} user
 * @param {number} [limit]
 * @param {string} [sort]
 * @param {string} [fields]
 * @returns {Promise} `User Anime List Model`
 */
function getUserWatchList(user, limit, sort, fields) {
  /** 
   * Promises a json data object provided a username
   * @param {Object} data
   * @returns {Promise} `User Anime List Model`
   */
  getUserWatchList.next = (data) => {
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
  getUserWatchList.previous = (data) => {
    return new Promise(async (resolve, reject) => {
      if (!data || typeof data !== 'object') return reject(new Error('[TAKI] Invalid Data'));
      if (!checkClientKey()) return reject(new Error('[TAKI] No MAL "CLIENT_KEY" provided'));
      if (!data.paging.previous) return reject(new Error('[TAKI] Cannot access page that does not exist'));

      resolve(getPrevious(data));
    });
  };

  return new Promise(async (resolve, reject) => {
    if (!user || typeof user !== 'string') return reject(new Error('[TAKI] Invalid User'));
    if (!checkClientKey()) return reject(new Error('[TAKI] No MAL "CLIENT_KEY" provided'));

    resolve(getList(user, limit, sort, fields));
  });
}

module.exports = {
  getUserWatchList
};