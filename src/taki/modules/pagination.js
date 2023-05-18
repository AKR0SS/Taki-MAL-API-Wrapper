const getRequest = require('../handlers/requestHandler');

function getPagination(URI, apiKey) {
    return new Promise(async (resolve, reject) => {
        const path = URI.origin + URI.pathname;
        if (path != 'https://api.myanimelist.net/v2/anime') return reject(new Error('[TAKI] Invalid URI'));

        resolve(getRequest(URI, apiKey));
    });
}

module.exports = { getPagination };