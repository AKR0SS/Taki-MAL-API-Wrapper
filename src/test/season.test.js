const { setClientKey, getSeason } = require('../taki/index.js');
require("dotenv").config();

const CLIENT_KEY = process.env.CLIENT_KEY;

const season = 'spring';
const year = '2015';
const animeId = 27775;

test('Get Seasonal Data', async () => {
    setClientKey(CLIENT_KEY);
    const data = await getSeason(season, year);
    expect(data.data[9].node.id).toBe(animeId);
});