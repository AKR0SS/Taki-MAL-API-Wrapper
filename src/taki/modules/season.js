const getSeasonInfo = require('../handlers/seasonHandler');

function getSeason(season, year) {
    return new Promise(async (resolve, reject) => {
        let data = await getSeasonInfo(season, year);
        resolve(data);
    });
}

module.exports = {
    getSeason
}