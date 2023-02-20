const path = require('path');
const getRequest = require("../handlers/requestHandler");

const ANIME_FIELDS = 'id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,created_at,updated_at,media_type,status,genres,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics';
const MANGA_FIELDS = 'id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_volumes,num_chapters,authors{first_name,last_name},pictures,background,related_anime,related_manga,recommendations,serialization{name}';

function getAnimeInfoFromId(baseUrl, apiKey, animeID, fields = ANIME_FIELDS) {
  return new Promise((resolve, reject) => {
    if ((isNaN(animeID) || animeID < 1)) return reject(new Error('[TAKI] Invalid animeID'));

    baseUrl.pathname += path.join('anime', animeID.toString());
    baseUrl.searchParams.set('fields', fields);

    resolve(getRequest(baseUrl, apiKey));
  });
}

function getAnimeInfoFromURL(baseUrl, apiKey, url, fields) {
  return new Promise((resolve, reject) => {
    if (!url) return reject(new Error('[TAKI] Invalid URL'));

    const split = url.split('/');
    const animeId = split[4];

    if (isNaN(animeId)) return reject(new Error('[TAKI] Unable to parse a valid link'));

    resolve(getAnimeInfoFromId(baseUrl, apiKey, animeId, fields));
  });
}

function getMangaInfoFromId(baseUrl, apiKey, mangaID, fields = MANGA_FIELDS) {
  return new Promise((resolve, reject) => {
    if ((isNaN(mangaID) || mangaID < 1)) return reject(new Error('[TAKI] Invalid mangaID'));

    baseUrl.pathname += path.join('manga', mangaID.toString());
    baseUrl.searchParams.set('fields', fields);

    resolve(getRequest(baseUrl, apiKey));
  });
}

function getMangaInfoFromURL(baseUrl, apiKey, url, fields) {
  return new Promise((resolve, reject) => {
    if (!url) return reject(new Error('[TAKI] Invalid URL'));

    const split = url.split('/');
    const mangaID = split[4];

    if (isNaN(mangaID)) return reject(new Error('[TAKI] Unable to parse a valid link'));

    resolve(getMangaInfoFromId(baseUrl, apiKey, mangaID, fields));
  });
}

module.exports = {
  getAnimeInfoFromId,
  getAnimeInfoFromURL,
  getMangaInfoFromId,
  getMangaInfoFromURL
};