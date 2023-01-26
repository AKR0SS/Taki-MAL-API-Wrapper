const { setClientKey, getInfoFromId, getInfoFromURL } = require('./modules/info.js');
const { getInfoFromName, search } = require('./modules/search.js');

module.exports = {
    setClientKey,
    getInfoFromId,
    getInfoFromURL,
    getInfoFromName,
    search
};