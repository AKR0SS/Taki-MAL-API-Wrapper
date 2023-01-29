const { getClientKey } = require('../handlers/clientHandler');

// Default values if sort and field values are not set
const limit = 10;
const sort = 'list_score';
const fields = 'alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,genres,created_at,media_type,status,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,studios';

/**
 * Fetches a user's anime list pre-sorted by score
 * @param {String} user
 * @return {object} `User Anime List Model`
 */
async function getList(user) {
  const CLIENT_KEY = getClientKey();
  const request = await fetch(`https://api.myanimelist.net/v2/users/${user}/animelist?&limit=${limit}&sort=${sort}&fields=list_status,${fields}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'X-MAL-CLIENT-ID': CLIENT_KEY
    }
  });
  return request.json();
}

module.exports = getList;