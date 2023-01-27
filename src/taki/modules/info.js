// queries for all avaliable elements within an anime object from MAL
const FIELDS = 'id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,created_at,updated_at,media_type,status,genres,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics';

let CLIENT_KEY;

/**
 * Fetches Anime json data from the MAL API for a specific Anime
 * @param {int} AnimeId
 * @return {object} `json data object`
 */
async function getInfo(animeId) {
  const request = await fetch(`https://api.myanimelist.net/v2/anime/${animeId}?fields=${FIELDS}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'X-MAL-CLIENT-ID': CLIENT_KEY
    }
  });
  return request.json();
}

/**
 * Your Client Key provided from MAL to fetch API data
 * @param {string} key
 */
function setClientKey(key) {
  CLIENT_KEY = key;
}

/**
 * Checks if the user has called and set a CLIENT_KEY to make suffecient API queries
 * @returns {Boolean} if client key exists
 */
function checkClientKey() {
  if (CLIENT_KEY) return true;
  return false;
}

/**
 * Promises a json data object provided an anime's ID
 * @param {number} AnimeId
 * @returns {Promise} `json data object`
 */
function getInfoFromId(animeId) {
  return new Promise((resolve, reject) => {
    if (!animeId || typeof animeId !== 'number') return reject(new Error('[TAKI] Invalid ID'));
    if (!checkClientKey()) return reject(new Error('[TAKI] No MAL "CLIENT_KEY" provided'));

    resolve(getInfo(animeId));
  });
}

/**
 * Promises a json data object provided an anime's MAL URL
 * - this is for lazy ppl like myself who don't want to parse an entered URL in my code
 * @param {string} url 
 * @returns {Promise} `json data object`
 */
function getInfoFromURL(url) {
  return new Promise((resolve, reject) => {
    if (!url || typeof url !== 'string' || !url.toLowerCase().includes('https://myanimelist.net/')) return reject(new Error('[TAKI] Invalid URL'));
    if (!checkClientKey()) return reject(new Error('[TAKI] No MAL "CLIENT_KEY" provided'));

    const split = url.split('/');
    const id = split[4];

    resolve(getInfo(id));
  });
}

module.exports = {
  setClientKey,
  getInfoFromId,
  getInfoFromURL
};