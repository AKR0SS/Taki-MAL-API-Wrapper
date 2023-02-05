const { getClientKey } = require('../handlers/clientHandler');
const path = require('path');

// queries for all avaliable elements within an anime object from MAL
const _FIELDS = 'id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,created_at,updated_at,media_type,status,genres,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics';

// URL construct
const url = new URL('https://api.myanimelist.net');
const pathParameters = '/v2/anime/';

/**
 * Fetches Anime json data from the MAL API for a specific Anime
 * @param {int} AnimeId
 * @param {string} [fields]
 * @return {object} `Anime Info Model`
 */
async function getInfo(animeId, fields = _FIELDS) {
  const CLIENT_KEY = getClientKey();

  url.pathname = path.join(pathParameters, animeId.toString());
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

module.exports = getInfo;