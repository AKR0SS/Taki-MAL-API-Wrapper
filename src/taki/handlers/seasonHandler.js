const { getClientKey } = require('../handlers/clientHandler');
const path = require('path');

const _SORT = 'anime_score';

const url = new URL('https://api.myanimelist.net');
const pathParameters = '/v2/anime/season/';

/**
 * Fetches Anime json data from the MAL API for a list of best-match results.
 * @param {string} season
 * @param {number} year
 * @param {string} [sort]
 * @return {object} `Anime Season Model`
 */
async function getSeasonInfo(season, year, sort = _SORT) {
  const CLIENT_KEY = getClientKey();

  url.pathname = path.join(pathParameters, year.toString(), season);
  url.searchParams.set('sort', sort);

  const request = await fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'X-MAL-CLIENT-ID': CLIENT_KEY
    }
  });
  return request.json();
}

module.exports = getSeasonInfo;