<div align="center">
<img src="https://i.imgur.com/RJEAPvN.png" width=420>

[![Version][version-shield]][repo-url]
[![Code-Size][code-size-shield]][repo-url]
[![Issues][issues-sheild]][repo-url]
[![CodeCoverage][coverage-sield]][repo-url]
[![License][license-shield]][repo-url]
<br></br>
</div>

&emsp;&emsp;Taki is a simple MAL API wrapper made for [Kumiko](https://github.com/AKR0SS/Kumiko-Discord-Bot) as none of the API wrappers I found were neither fast, or as streamlined as I would have liked the. This is my first interaction with node's Fetch API, json querying, jest, environment variables, and propper workflow Actions. With all of that listed, I don't know what I don't know and if there's any improvements as I develop this wrapper, please say so!

<div align="center">
<br></br>

## Table of Contents </div>

- [Gettings Started](https://github.com/AKR0SS/Taki-MAL-API-Wrapper/blob/main/readme.md#Gettings_Started)
- [Methods](https://https://github.com/AKR0SS/Taki-MAL-API-Wrapper/blob/main/readme.md#Methods)
  - [`setClientKey()`](https://https://github.com/AKR0SS/Taki-MAL-API-Wrapper/blob/main/readme.md#setClientKey)
  - [`getInfoFromId()`](https://https://github.com/AKR0SS/Taki-MAL-API-Wrapper/blob/main/readme.md#getInfoFromId)
  - [`getInfoFromURL()`](https://https://github.com/AKR0SS/Taki-MAL-API-Wrapper/blob/main/readme.md#getInfoFromURL)
  - [`search()`](https://https://github.com/AKR0SS/Taki-MAL-API-Wrapper/blob/main/readme.md#search)
  - [`getInfoFromName()`](https://https://github.com/AKR0SS/Taki-MAL-API-Wrapper/blob/main/readme.md#getInfoFromName)

<div align="center">
<br></br>

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

## Methods

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

/* call getInfoFromId() */
async function data() { // where '27989' represents the anime Hibike! Euphonium
    const data = await taki.getInfoFromId(27989);
    console.log(data);
};

data();
```

### getInfoFromURL(url: string): Promise&lt;any>

```js
async function data() {
    const data = await taki.getInfoFromURL('https://myanimelist.net/anime/27989/Hibike_Euphonium');
    console.log(data);
};

data();
```

### search(name: string): Promise&lt;any>

```js
async function data() {
    const data = await taki.search('Hibike! Euphonium');
    for(let i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
};

data();
```

### getInfoFromName(name: string): Promise&lt;any>

```js
async function data() {
    const data = await taki.getInfoFromName('Hibike! Euphonium');
    console.log(data);
};

data();
```

<div align="center">
<br></br>

## Data Models </div>

Currently, there is no option to return neither additional data models, nor specific queries for data models. So there is only one accessable data model returned by every command making things extremely consistant and easy, but with less flexibility and in hand, slightly slower performance.

### Anime search model

| Property | Type | Description |
| --- | --- | --- |
| id | number | Unique identifier for a specified anime |
| title | string | Title of a queried anime |
| main_picture | string object | Contains differing sizes of an anime's cover image |
| alternative_titles | string object | Various titles depending on language |
| start_date | string | The first date of airing |
| end_date | string | The last date of airing |
| synopsis | string | The description of an anime |
| mean | number | The average user score |
| rank | number | Rank of the average user score out of all anime |
| popularity | number | A measure of how many members an anime has |
| num_list_users | number | Number of users that have the anime on their list |
| num_scoring_users | number | Number of users who haved scored the anime |
| *nsfw | bool | Returns a consistance string 'white', not sure why so it is disabled currently |
| created_at | string | Date of MAL page creation |
| updated_at | string | Date of MAL page updated |
| media_type | string | Whether the anime is a tv series, OVA, Movie, etc. |
| status | string | Whether the anime is currently airing, finished airing, etc. |
| genres | object array | All genres associated with an anime |
| num_episodes | number | Total amount of episodes an anime has |
| start_season | object | What season the anime aired in |
| broadcast | string object | Day and time of airing |
| source | string | What media the anime originated from, like a light novel or manga |
| average_episode_duration | number | The number of seconds each episode on average lasts |
| rating | string | User rating on MAL |
| pictures | object array | All attached pictures to a specified anime |
| background | string | Production specific awards and other interesting information not pertaining to plot |
| related_anime | object array | List of anime prequels, sequals, OVA's, Movies, etc. of the queried anime |
| related_manga | object array | List of all manga related sources, side stories, etc. of the queried anime |
| recommendations | object array | A sorted object of which anime are most recommended pertaining to the queried anime |
| studios | object array | List of production studios |
| statistics | objest | How many users have completed, dropped, are watching, etc. of the queried anime |

[repo-url]: https://github.com/akr0ss/Taki-MAL-API-Wrapper
[version-shield]: https://img.shields.io/github/v/release/akr0ss/Taki-MAL-API-Wrapper?include_prereleases
[code-size-shield]: https://img.shields.io/github/languages/code-size/akr0ss/Taki-MAL-API-Wrapper
[issues-sheild]: https://img.shields.io/github/issues/akr0ss/Taki-MAL-API-Wrapper
[coverage-sield]: https://img.shields.io/badge/Code%20Coverage-100%25-c03b13
[license-shield]: https://img.shields.io/github/license/akr0ss/Taki-MAL-API-Wrapper
