async function getRequest(url, apiKey) {
  const request = await fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'X-MAL-CLIENT-ID': apiKey
    }
  });
  return request.json();
}

module.exports = getRequest;