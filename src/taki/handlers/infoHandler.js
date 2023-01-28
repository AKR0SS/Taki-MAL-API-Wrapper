const { getClientKey } = require('../handlers/clientHandler');

// queries for all avaliable elements within an anime object from MAL
const FIELDS = 'id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,created_at,updated_at,media_type,status,genres,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics';

/**
 * Fetches Anime json data from the MAL API for a specific Anime
 * @param {int} AnimeId
 * @return {object} `json data object`
 */
async function getInfo(animeId) {
    const CLIENT_KEY = getClientKey();
    const request = await fetch(`https://api.myanimelist.net/v2/anime/${animeId}?fields=${FIELDS}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'X-MAL-CLIENT-ID': CLIENT_KEY
      }
    });
    return request.json();
}

module.exports = getInfo;