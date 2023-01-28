const getSearch = require("../handlers/searchHandler");

/**
 * Promises a json data object provided an anime's NAME
 * @param {string} name 
 * @returns {Promise} `json data object`
 */
function getInfoFromName(name) {
    return new Promise(async (resolve, reject) => {
        if (!name || typeof name !== 'string') return reject(new Error('[TAKI] Invalid Name '));

        const data = await getSearch(name);
        resolve(data.data[0]);
    });
}

/**
 * Promises an array of json data object provided an anime's NAME
 * @param {string} name
 * @return {Promise} `json data array object`
 */
function search(name) {
    return new Promise(async (resolve, reject) => {
        if (!name || typeof name !== 'string') return reject(new Error('[TAKI] Invalid Name '));

        const data = await getSearch(name);
        resolve(data);
    });
}

module.exports = {
    getInfoFromName,
    search
}