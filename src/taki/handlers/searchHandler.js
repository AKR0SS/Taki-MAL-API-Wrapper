const { getClientKey } = require('../handlers/clientHandler');

/**
 * Fetches Anime json data from the MAL API for a list of best-match results.
 * @param {string} AnimeName
 * @return {object} `Anime Search Model`
 */
async function getSearch(name) {
  const CLIENT_KEY = getClientKey();
  const request = await fetch(`https://api.myanimelist.net/v2/anime?q=${name}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'X-MAL-CLIENT-ID': CLIENT_KEY
    }
  });
  return request.json();
}

module.exports = getSearch;