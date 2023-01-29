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
- [Methods](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#methods)
  - [`setClientKey()`](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#setclientkeykey-string-void)
  - [`getInfoFromId()`](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#getinfofromidanimeid-number-promiseany)
  - [`getInfoFromURL()`](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#getinfofromurlurl-string-promiseany)
  - [`search()`](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#searchname-string-promiseany)
  - [`getInfoFromName()`](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#getinfofromnamename-string-promiseany)
  - [`getSeason()`](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#getseasonseason-any-year-any-promiseany)
  - [`getUserWatchList()`](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#getuserwatchlistuser-string-promiseany)
- [Data Models](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#data-models-)
  - [Anime Info Model](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#anime-info-model)
  - [Anime Search Model](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#anime-search-model)
  - [Anime Season Model](https://github.com/AKR0SS/Taki-MAL-API-Wrapper#anime-season-model)
<div align="center">

## Gettings Started </div>

### Creating your MAL Client ID

This is incredibly simple, all you have to do is head [here](https://myanimelist.net/apiconfig). Inline with the section heading "Clients Accessing the MAL API", click the "Create ID" button. Once the required information has been filled out, all there is to do is agree to the license and click submit!

Now to find your Client ID, again under the section header "Clients Accessing the MAL API", click "Edit" and your Client ID will be listed there for you to copy and do whatever you will with it.

 >A more detailed post can be found [here](https://myanimelist.net/forum/?topicid=1973077).

### Installation

> Since I am not yet done, if you would like to install it, you will have to do so manually

- Download the [latest release](https://github.com/AKR0SS/Taki-MAL-API-Wrapper/releases)
- Run: `npm install [your-file-location]/taki-{version}.tgz`
  - Example: `npm install ../../downloads/myfolder/taki-0.1.0.tgz`

<div align="center">

## Methods </div>

### setClientKey(key: string): void

> Remeber, When interacting with anime data, you MUST set your client key or else an error will be thrown

We will also assume that this call to setClientKey exists in all of the rest of the provided examples.

```js
const taki = require('taki');
require("dotenv").config();

const CLIENT_KEY = process.env.CLIENT_KEY;
taki.setClientKey(CLIENT_KEY);
```

### getInfoFromId(animeId: number): Promise&lt;any>

> Don't forget the Client Key!

```js
const taki = require('taki');
require("dotenv").config();

const CLIENT_KEY = process.env.CLIENT_KEY;
taki.setClientKey(CLIENT_KEY);

/**
 * Promises a json data object provided an anime's ID
 * @param {number} AnimeId
 * @returns {Promise} `Anime Info Model`
 */
async function data() { // where '27989' represents the anime Hibike! Euphonium
    const anime = await taki.getInfoFromId(27989);
    console.log(anime);
};
```

### getInfoFromURL(url: string): Promise&lt;any>

```js
/**
 * Promises a json data object provided an anime's MAL URL
 * - this is for lazy ppl like myself who don't want to parse an entered URL in my code
 * @param {string} url 
 * @returns {Promise} `Anime Info Model`
 */
async function data() {
    const anime = await taki.getInfoFromURL('https://myanimelist.net/anime/27989/Hibike_Euphonium');
    console.log(anime.title);
};
```

### search(name: string): Promise&lt;any>

```js
/**
 * Promises an array of json data object provided an anime's NAME
 * @param {string} name
 * @return {Promise} `Anime Search Model`
 */
async function data() {
    const anime = await taki.search('Hibike! Euphonium');

    for (let i = 0; i < anime.data.length; i++) {
        console.log(anime.data[i].node.title);
    }
};
```

### getInfoFromName(name: string): Promise&lt;any>

```js
/**
 * Promises a json data object provided an anime's NAME
 * @param {string} name 
 * @returns {Promise} `First Anime Search Model Data Element`
 */
async function data() {
    const anime = await taki.getInfoFromName('Hibike! Euphonium');
    console.log(anime.node.title);
};
```

### getSeason(season: any, year: any): Promise&lt;any>

```js
/**
 * Promises an array of json data object provided an anime's NAME
 * @param {string} season
 * @return {Promise} `Anime Season Model`
 */
async function data() {
    const anime = await taki.getSeason('spring', '2015');
    console.log(anime.data[0].node.title);
};
```

### getUserWatchList(user: string): Promise&lt;any>

```js
/**
 * Promises a json data object provided a username
 * @param {String} user
 * @returns {Promise} `User Anime List Model`
 */
async function data() {
    const anime = await taki.getUserWatchList('xAKROSSx');
    console.log(anime.data[0].node.title);
};
```

<div align="center">

## Data Models </div>

To view a specific data model on the MAL API page, on the right side under response samples > Content type, select "application/json". This will give you all of the possible return values for all of these differing models.

### Anime Info Model

<https://myanimelist.net/apiconfig/references/api/v2#operation/anime_anime_id_get>

### Anime Search Model

<https://myanimelist.net/apiconfig/references/api/v2#operation/anime_get>

### Anime Season Model

<https://myanimelist.net/apiconfig/references/api/v2#operation/anime_season_year_season_get>

### User Anime List Model

<https://myanimelist.net/apiconfig/references/api/v2#operation/users_user_id_animelist_get>

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
