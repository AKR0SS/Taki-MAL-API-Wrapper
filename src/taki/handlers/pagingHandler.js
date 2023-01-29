const {
    getClientKey
  } = require('./clientHandler');

  /**
 * Paginates forward
 * @param {Object} data
 * @return {object} `User Anime List Model`
 */
async function getNext(data) {
    const CLIENT_KEY = getClientKey();
    const request = await fetch(data.paging.next, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'X-MAL-CLIENT-ID': CLIENT_KEY
        }
    });
    return request.json();
}

/**
 * Paginates backwards
 * @param {Object} data
 * @return {object} `User Anime List Model`
 */
async function getPrevious(data) {
    const CLIENT_KEY = getClientKey();
    const request = await fetch(data.paging.previous, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'X-MAL-CLIENT-ID': CLIENT_KEY
        }
    });
    return request.json();
}

module.exports = {
    getPrevious,
    getNext
}