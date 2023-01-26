const {
    getInfoFromId
} = require('./info');

const SEARCH_URI = 'https://myanimelist.net/search/prefix.json?';

/**
 * Fetches Anime json data from the MAL API for a list of best-match results.
 * @param {string} AnimeName
 * @return {object} json data object
 */
async function getSearch(name) {
    const request = await fetch(SEARCH_URI.concat(`type=anime&keyword=${name}`));
    return request.json();
}

/**
 * Promises a json data object provided an anime's NAME
 * @param {string} name 
 * @returns {object} json data object
 */
function getInfoFromName(name) {
    return new Promise(async (resolve, reject) => {
        if (!name || typeof name !== 'string') return reject(new Error('[TAKI] Invalid Name '));

        let data = await getSearch(name);
        // data.categories[0].items[0] is a scuffed data model
        // so I'll use the ID to call INFO for a more standarized data model

        data = getInfoFromId(data.categories[0].items[0].id);

        resolve(data);
    });
}

/**
 * Promises an array of json data object provided an anime's NAME
 * @param {string} name
 * @return {object_array} json data array object 
 */
function search(name) {
    return new Promise(async (resolve, reject) => {
        if (!name || typeof name !== 'string') return reject(new Error('[TAKI] Invalid Name '));

        const jsonObj = await getSearch(name);
        const DATALENGTH = jsonObj.categories[0].items.length;
        const data = [];

        // for some reason [] = x; is faster than .push(x) in this scenario
        for (let i = 0; i < DATALENGTH; i++) {
            data[i] = (await getInfoFromId(jsonObj.categories[0].items[i].id));
        }

        resolve(data);
    });
}

module.exports = {
    getInfoFromName,
    search
}