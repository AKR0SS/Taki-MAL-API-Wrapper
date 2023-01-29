const getList = require("../handlers/listHandler");
const { checkClientKey } = require('../handlers/clientHandler');

/**
 * Promises a json data object provided a username
 * @param {String} user
 * @returns {Promise} `User Anime List Model`
 */
function getUserWatchList(user) {
    return new Promise(async (resolve, reject) => {
        if (!user || typeof user !== 'string') return reject(new Error('[TAKI] Invalid User'));
        if (!checkClientKey()) return reject(new Error('[TAKI] No MAL "CLIENT_KEY" provided'));
        
        resolve(getList(user));
    });
}

module.exports = { getUserWatchList };