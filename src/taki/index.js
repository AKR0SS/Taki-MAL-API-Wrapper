const { getInfoFromId, getInfoFromURL } = require('./modules/info.js');
const { getInfoFromName, search } = require('./modules/search.js');
const { getSeason } =  require('./modules/season.js');
const { setClientKey } = require('./handlers/clientHandler.js');

module.exports = {
    setClientKey,
    getInfoFromId,
    getInfoFromURL,
    getInfoFromName,
    search,
    getSeason
};