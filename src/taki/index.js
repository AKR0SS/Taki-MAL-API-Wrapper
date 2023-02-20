const { getAnimeInfoFromId, getAnimeInfoFromURL, getMangaInfoFromId, getMangaInfoFromURL } = require('./modules/info.js');
const { getUserAnimeList, getUserMangaList } = require('./modules/user.js');
const { animeSearch, mangaSearch } = require('./modules/search.js');
const { season } = require('./modules/season.js');
const { animeRank, mangaRank } = require('./modules/ranking.js');

module.exports = class Taki {
  /**
   * Is needed to make requests to the MAL API
   * @param {string} nApiKey 
   */
  constructor(nApiKey) {
    this.baseUrl = new URL('https://api.myanimelist.net/v2/');
    this.apiKey = nApiKey;
  }

  //* ANIME

  /**
   * Gets anime info of a provided ID or from a full-length MAL URL
   * @param {string|number} param - Anime ID or MAL webpage URL
   * @param {string} [fields] - Optional argument that if specified, by default will return
   *     `{id, title, main_picture}`, but if not, returns ALL avaliable fields
   * @returns {Promise} Anime Info Model Json Object
   */
  async getAnimeInfo(param, fields) {
    switch (typeof param) {
      case 'string':
        return getAnimeInfoFromURL(this.baseUrl, this.apiKey, param, fields);
      case 'number':
        return getAnimeInfoFromId(this.baseUrl, this.apiKey, param, fields);
      default:
        return null;
    }
  }

  /**
   * Searches for an anime on a best-match case
   * @param {string} animeName
   * @returns {Promise} Array of the Anime Info Model Json Data Object
   */
  async searchAnime(animeName) {
    return animeSearch(this.baseUrl, this.apiKey, animeName);
  }

  /**
   * Gets Anime from a specified season and year
   * @param {string} season 
   * @param {number} year 
   * @returns {Promise} Anime Season Model Json Data Object
   */
  async getSeason(nSeason, year) {
    return season(this.baseUrl, this.apiKey, nSeason, year);
  }

  /**
   * Get the current top anime
   * @returns  {Promise} Anime Ranking Json Data Object
   */
  async getAnimeRanking() {
    return animeRank(this.baseUrl, this.apiKey);
  }

  //* MANGA

  /**
   * Gets manga info of a provided ID or from a full-length MAL URL
   * @param {string|number} param  - Manga ID or MAL webpage URL
   * @param {string} [fields] - Optional argument that if specified, by default will return
   *     `{id, title, main_picture}`, but if not, returns ALL avaliable fields
   * @returns {Promise} Manga Info Model Json Data Object
   */
  async getMangaInfo(param, fields) {
    switch (typeof param) {
      case 'string':
        return getMangaInfoFromURL(this.baseUrl, this.apiKey, param, fields);
      case 'number':
        return getMangaInfoFromId(this.baseUrl, this.apiKey, param, fields);
      default:
        return null;
    }
  }

  /**
   * Searches for a manga on a best-match case
   * @param {string} mangaName 
   * @returns {Promise} Array of the Manga Info Model Json Data Object
   */
  async searchManga(mangaName) {
    return mangaSearch(this.baseUrl, this.apiKey, mangaName);
  }

  /**
   * Get the current top manga
   * @returns {Promise} Manga Ranking Json Data Object
   */
  async getMangaRanking() {
    return mangaRank(this.baseUrl, this.apiKey);
  }

  //* USER

  /**
   * Retrieves a user's watched anime list
   * @param {string} user 
   * @returns {Promise} User Anime List Json Data Object
   */
  async getWatchList(user) {
    return getUserAnimeList(this.baseUrl, this.apiKey, user);
  }

  /**
   * Retrieves a user's read manga list
   * @param {string} user 
   * @returns {Promise} User Manga List Json Data Object
   */
  async getReadList(user) {
    return getUserMangaList(this.baseUrl, this.apiKey, user);
  }

  //? FORUM
}