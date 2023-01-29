const getSearch = require("../handlers/searchHandler");
const { checkClientKey } = require('../handlers/clientHandler');

/**
 * Promises a json data object provided an anime's NAME
 * @param {string} name 
 * @returns {Promise} `First Anime Search Model Data Element`
 */
function getInfoFromName(name) {
    return new Promise(async (resolve, reject) => {
        if (!name || typeof name !== 'string') return reject(new Error('[TAKI] Invalid Name '));
        if (!checkClientKey()) return reject(new Error('[TAKI] No MAL "CLIENT_KEY" provided'));

        const data = await getSearch(name);
        resolve(data.data[0]);
    });
}

/**
 * Promises an array of json data object provided an anime's NAME
 * @param {string} name
 * @return {Promise} `Anime Search Model`
 */
function search(name) {
    return new Promise(async (resolve, reject) => {
        if (!name || typeof name !== 'string') return reject(new Error('[TAKI] Invalid Name '));
        if (!checkClientKey()) return reject(new Error('[TAKI] No MAL "CLIENT_KEY" provided'));
        
        const data = await getSearch(name);
        resolve(data);
    });
}

module.exports = {
    getInfoFromName,
    search
}