const {
    getInfoFromId
} = require('./info');

const SEARCH_URI = 'https://myanimelist.net/search/prefix.json?';

/**
 * Fetches Anime json data from the MAL API for a list of best-match results.
 * @param {string} AnimeName
 * @return {object} `Anime Id`
 */
async function getSearch(name) {
    const request = await fetch(SEARCH_URI.concat(`type=anime&keyword=${name}`));
    return request.json();
}

/**
 * Promises a json data object provided an anime's NAME
 * @param {string} name 
 * @returns {Promise} `json data object`
 */
function getInfoFromName(name) {
    return new Promise(async (resolve, reject) => {
        if (!name || typeof name !== 'string') return reject(new Error('[TAKI] Invalid Name '));

        // data.categories[0].items[0] is a scuffed data model
        // so I'll use the ID to call INFO for a more standarized data model
        let data = await getSearch(name);
        data = getInfoFromId(data.categories[0].items[0].id);

        resolve(data);
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
        const DATALENGTH = data.categories[0].items.length;
        const dataArray = [];

        // for some reason [] = x; is faster than .push(x) in this scenario
        for (let i = 0; i < DATALENGTH; i++) {
            dataArray[i] = (await getInfoFromId(data.categories[0].items[i].id));
        }

        resolve(dataArray);
    });
}

module.exports = {
    getInfoFromName,
    search
}