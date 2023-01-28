const { getClientKey } = require('../handlers/clientHandler');

/**
 * Fetches Anime json data from the MAL API for a list of best-match results.
 * @param {string} season
 * @param {number} year
 * @return {object} `Anime Season Model`
 */
async function getSeasonInfo(season, year) {
    const CLIENT_KEY = getClientKey();
    const request = await fetch(`https://api.myanimelist.net/v2/anime/season/${year}/${season}?sort=animescore`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'X-MAL-CLIENT-ID': CLIENT_KEY
      }
    });
    return request.json();
}

module.exports = getSeasonInfo;