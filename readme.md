<div align="center">
<img src="https://i.imgur.com/RJEAPvN.png" width=420>

[![Version][version-shield]][repo-url]
[![Code-Size][code-size-shield]][repo-url]
[![Issues][issues-sheild]][repo-url]
[![CodeCoverage][coverage-sield]][repo-url]
[![License][license-shield]][repo-url]
<br></br>
</div>

&emsp;&emsp;Taki is a simple MAL API wrapper made for [Kumiko](https://github.com/AKR0SS/Kumiko-Discord-Bot) as none of the API wrappers I found were neither as fast, or as streamlined as I would have liked them. This is my first interaction with node's Fetch API, json querying, jest, environment variables, and propper workflow Actions. With all of that listed, I don't know what I don't know and if there's any improvements as I develop this wrapper, please say so!

<div align="center">

## Table of Contents </div>

- [Gettings Started](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#gettings-started-)
  - [Creating your MAL Client ID](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#creating-your-mal-client-id)
  - [Installation](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#installation)
- [Constructors](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#constructors-)
  - [`Taki()`](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#takinapikey-string-taki)
- [Methods](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#methods-)
  - [`getAnimeInfo()`](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#takigetanimeinfoparam-string--number-fields-string--undefined-promiseany)
  - [`searchAnime()`](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#takisearchanimeanimename-string-promiseany)
  - [`getAnimeRanking()`](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#takigetanimeranking-promiseany)
  - [`getSeason()`](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#takigetseasonnseason-any-year-number-promiseany)
  - [`getMangaInfo()`](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#takigetmangainfoparam-string--number-fields-string--undefined-promiseany)
  - [`searchManga()`](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#takisearchmangamanganame-string-promiseany)
  - [`getMangaRanking()`](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#takigetmangaranking-promiseany)
  - [`getWatchList()`](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#takigetwatchlistuser-string-promiseany)
  - [`getReadList()`](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#takigetreadlistuser-string-promiseany)
- [Data Models](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#data-models-)
  - [Anime Data Models](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#anime)
  - [Manga Data Models](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#manga)
  - [User Data Models](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#user)

<div align="center">

## Gettings Started </div>

### Creating your MAL Client ID

This is incredibly simple, all you have to do is head [here](https://myanimelist.net/apiconfig). Inline with the section heading "Clients Accessing the MAL API", click the "Create ID" button. Once the required information has been filled out, all there is to do is agree to the license and click submit!

Now to find your Client ID, again under the section header "Clients Accessing the MAL API", click "Edit" and your Client ID will be listed there for you to copy and do whatever you will with it.

> A more detailed post can be found [here](https://myanimelist.net/forum/?topicid=1973077).

### Installation

> Since I am not yet done, if you would like to install it, you will have to do so manually

- Download the [latest release](https://github.com/AKR0SS/Taki-MAL-API-Wrapper/releases)
- Run: `npm install [your-file-location]/taki-{version}.tgz`
  - Example: `npm install ../../downloads/myfolder/taki-0.1.0.tgz`

<div align="center">

## Constructors </div>

### Taki(nApiKey: string): Taki

> Remeber, When interacting with anime data, you MUST set your client key!

We will also assume that this call to the constructor exists in all of the rest of the provided examples.

```js
const Taki = require('../taki/index.js');
require("dotenv").config();
```

<div align="center">

## Methods </div>

### Taki.getAnimeInfo(param: string | number, fields?: string | undefined): Promise&lt;any>

> Returns an [Anime Info Data Model](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#anime-info-model)

```js
/**
 * Gets anime info of a provided ID or from a full-length MAL URL
 * @param {string|number} param - Anime ID or MAL webpage URL
 * @param {string} [fields] - Optional argument that if specified, by default will return
 *     `{id, title, main_picture}`, but if not, returns ALL avaliable fields
 * @returns {Promise} Anime Info Model Json Object
 */

// Don't forget the constructor!
const taki = new Taki(CLIENT_KEY);
const data = await taki.getAnimeInfo(animeID);
```

### Taki.searchAnime(animeName: string): Promise&lt;any>

> Returns an array of the [Anime Info Data Models](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#anime)

```js
/**
 * Searches for an anime on a best-match case
 * @param {string} animeName
 * @returns {Promise} Array of the Anime Info Model Json Data Object
 */
```

### Taki.getAnimeRanking(): Promise&lt;any>

> Returns an [Anime Ranking Model](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#anime)

```js
/**
 * Get the current top anime
 * @returns  {Promise} Anime Ranking Json Data Object
 */
```

### Taki.getSeason(nSeason: any, year: number): Promise&lt;any>

> Returns an [Anime Season Data Models](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#anime)

```js
/**
 * Gets Anime from a specified season and year
 * @param {string} season 
 * @param {number} year 
 * @returns {Promise} Anime Season Model Json Data Object
 */
```

### Taki.getMangaInfo(param: string | number, fields?: string | undefined): Promise&lt;any>

> Returns a [Manga Info Model](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#manga)

```js
/**
 * Gets manga info of a provided ID or from a full-length MAL URL
 * @param {string|number} param  - Manga ID or MAL webpage URL
 * @param {string} [fields] - Optional argument that if specified, by default will return
 *     `{id, title, main_picture}`, but if not, returns ALL avaliable fields
 * @returns {Promise} Manga Info Model Json Data Object
 */
```

### Taki.searchManga(mangaName: string): Promise&lt;any>

> Returns an array of the [Manga Info Model](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#manga)

```js
/**
 * Searches for a manga on a best-match case
 * @param {string} mangaName 
 * @returns {Promise} Array of the Manga Info Model Json Data Object
 */
```

### Taki.getMangaRanking(): Promise&lt;any>

> Returns a [Manga Ranking Model](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#manga)

```js
/**
 * Get the current top manga
 * @returns {Promise} Manga Ranking Json Data Object
 */
```

### Taki.getWatchList(user: string): Promise&lt;any>

> Returns a [User's Anime List Model](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#user)

```js
/**
 * Retrieves a user's watched anime list
 * @param {string} user 
 * @returns {Promise} User Anime List Json Data Object
 */
```

### Taki.getReadList(user: string): Promise&lt;any>

> Returns a [User's Manga List Model](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#user)

```js
/**
 * Retrieves a user's read manga list
 * @param {string} user 
 * @returns {Promise} User Manga List Json Data Object
 */
```

<div align="center">

## Data Models </div>

To view a specific data model on the MAL API page, under "Responses", selecting "200 OK" to open the drop down, we can find all of the the accessable data provided by the default queries.

### Anime

- [Anime Info Model](https://myanimelist.net/apiconfig/references/api/v2#operation/anime_anime_id_get)

- [Anime Season Model](https://myanimelist.net/apiconfig/references/api/v2#operation/anime_season_year_season_get)

- [Anime Ranking Model](https://myanimelist.net/apiconfig/references/api/v2#operation/anime_ranking_get)

### Manga

- [Manga Info Model](https://myanimelist.net/apiconfig/references/api/v2#operation/manga_manga_id_get)

- [Manga Ranking Model](https://myanimelist.net/apiconfig/references/api/v2#operation/manga_ranking_get)

### User

- [User Anime List Model](https://myanimelist.net/apiconfig/references/api/v2#operation/users_user_id_animelist_get)

- [User Manga List Model](https://myanimelist.net/apiconfig/references/api/v2#operation/manga_get)

<div align="center">

## License </div>

MIT License

Copyright (c) 2023 Akross

[repo-url]: https://github.com/akr0ss/Taki-MAL-API-Wrapper
[version-shield]: https://img.shields.io/github/v/release/akr0ss/Taki-MAL-API-Wrapper?include_prereleases
[code-size-shield]: https://img.shields.io/github/languages/code-size/akr0ss/Taki-MAL-API-Wrapper
[issues-sheild]: https://img.shields.io/github/issues/akr0ss/Taki-MAL-API-Wrapper
[coverage-sield]: https://img.shields.io/badge/Code%20Coverage-100%25-c03b13
[license-shield]: https://img.shields.io/github/license/akr0ss/Taki-MAL-API-Wrapper
