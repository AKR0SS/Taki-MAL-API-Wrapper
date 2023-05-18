const { getAnimeInfoFromId, getAnimeInfoFromURL, getMangaInfoFromId, getMangaInfoFromURL } = require('./modules/info.js');
const { getUserAnimeList, getUserMangaList } = require('./modules/user.js');
const { animeSearch, mangaSearch } = require('./modules/search.js');
const { animeSeason } = require('./modules/season.js');
const { animeRank, mangaRank } = require('./modules/ranking.js');
const { getPagination } = require('./modules/pagination.js');

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
   * @param {number} [limit=10] limitvalue
   * @returns {Promise} Array of the Anime Info Model Json Data Object
   */
  async searchAnime(animeName, limit = 10) {
    return animeSearch(this.baseUrl, this.apiKey, animeName, limit);
  }

  /**
   * Gets Anime from a specified season and year
   * @param {string} season 
   * @param {number} year 
   * @param {number} [limit=10] limit
   * @returns {Promise} Anime Season Model Json Data Object
   */
  async getSeason(season, year, limit = 10) {
    return animeSeason(this.baseUrl, this.apiKey, season, year, limit);
  }

  /**
   * Get the current top anime
   * @param {string} [rankingType='all'] rankingType
   * @param {number} [limit=10] limit
   * @returns {Promise} Anime Ranking Json Data Object
   */
  async getAnimeRanking(rankingType = 'all', limit = 10) {
    return animeRank(this.baseUrl, this.apiKey, rankingType, limit);
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
   * @param {number} [limit=10] limit
   * @returns {Promise} Array of the Manga Info Model Json Data Object
   */
  async searchManga(mangaName, limit = 10) {
    return mangaSearch(this.baseUrl, this.apiKey, mangaName, limit);
  }

  /**
   * Get the current top manga
   * @param {string} [rankingType='all'] rankingType
   * @param {number} [limit=10] limit
   * @returns {Promise} Manga Ranking Json Data Object
   */
  async getMangaRanking(rankingType = 'all', limit = 10) {
    return mangaRank(this.baseUrl, this.apiKey, rankingType, limit);
  }

  //* USER

  /**
   * Retrieves a user's watched anime list
   * @param {string} user
   * @param {number} [limit=10] limit
   * @param {string} [status='watching'] status
   * @param {string} [sort='list_score'] sort
   * @returns {Promise} User Anime List Json Data Object
   */
  async getWatchList(user,  limit = 10, status = 'watching', sort = 'list_score') {
    return getUserAnimeList(this.baseUrl, this.apiKey, user, limit, status, sort);
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
  

  //* MISC

  /**
   * 
   * @param {string} paginationURI
   * @returns 
   */
  async paginate(paginationURI) {
    const URI = new URL(paginationURI);
    return getPagination(URI, this.apiKey);
  }
}