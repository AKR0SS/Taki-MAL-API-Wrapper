const { getClientKey } = require('../handlers/clientHandler');

/**
 * Fetches a user's anime list pre-sorted by score
 * @param {String} user
 * @return {object} `User Anime List Model`
 */
async function getList(user) {
    const CLIENT_KEY = getClientKey();
    const request = await fetch(`https://api.myanimelist.net/v2/users/${user}/animelist?sort=list_score`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'X-MAL-CLIENT-ID': CLIENT_KEY
      }
    });
    return request.json();
}

module.exports = getList;