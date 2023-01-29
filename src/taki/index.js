const { setClientKey } = require('./handlers/clientHandler.js');
const { getInfoFromId, getInfoFromURL } = require('./modules/info.js');
const { getInfoFromName, search } = require('./modules/search.js');
const { getSeason } = require('./modules/season.js');
const { getUserWatchList } = require('./modules/list.js');

module.exports = {
  setClientKey,
  getInfoFromId,
  getInfoFromURL,
  getInfoFromName,
  search,
  getSeason,
  getUserWatchList
};