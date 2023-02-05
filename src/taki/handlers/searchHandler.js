const { getClientKey } = require('../handlers/clientHandler');
const path = require('path');

const url = new URL('https://api.myanimelist.net');
const pathParameters = '/v2/anime';

/**
 * Fetches Anime json data from the MAL API for a list of best-match results.
 * @param {string} AnimeName
 * @return {object} `Anime Search Model`
 */
async function getSearch(name) {
  const CLIENT_KEY = getClientKey();

  url.pathname = path.join(pathParameters);
  url.searchParams.set('q', name);

  const request = await fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'X-MAL-CLIENT-ID': CLIENT_KEY
    }
  });
  return request.json();
}

module.exports = getSearch;