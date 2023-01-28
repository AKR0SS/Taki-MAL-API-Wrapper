const getSeasonInfo = require('../handlers/seasonHandler');

/**
 * Promises an array of json data object provided an anime's NAME
 * @param {string} season
 * @return {Promise} `Anime Season Model`
 */
function getSeason(season, year) {
    return new Promise(async (resolve, reject) => {
        let data = await getSeasonInfo(season, year);
        resolve(data);
    });
}

module.exports = {
    getSeason
}