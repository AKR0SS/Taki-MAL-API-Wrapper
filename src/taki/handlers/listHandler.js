const { getClientKey } = require('../handlers/clientHandler');
const path = require('path');

// Default values if sort and field values are not set
const _LIMIT = 10;
const _SORT = 'list_score';
const _FIELDS = 'alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,genres,created_at,media_type,status,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,studios';

const url = new URL('https://api.myanimelist.net');
const pathParameters1 = '/v2/users/';
const pathParameters2 = '/animelist';

/**
 * Fetches a user's anime list pre-sorted by score
 * @param {string} user
 * @param {number} [limit]
 * @param {string} [sort]
 * @param {string} [fields]
 * @return {object} `User Anime List Model`
 */
async function getList(user, limit = _LIMIT, sort = _SORT, fields = _FIELDS) {
  const CLIENT_KEY = getClientKey();

  url.pathname = path.join(pathParameters1, user, pathParameters2);
  url.searchParams.set('limit', limit.toString());
  url.searchParams.set('sort', sort);
  url.searchParams.set('fields', fields);

  const request = await fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'X-MAL-CLIENT-ID': CLIENT_KEY
    }
  });
  return request.json();
}

module.exports = getList;