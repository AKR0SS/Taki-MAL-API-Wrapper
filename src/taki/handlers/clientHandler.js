let CLIENT_KEY;

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
 * Get currently set Client Key
 * @returns {string} key
 */
function getClientKey() {
    return CLIENT_KEY;
}

module.exports = {
    setClientKey,
    getClientKey,
    checkClientKey
}