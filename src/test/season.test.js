const { setClientKey, getSeason } = require('../taki/index.js');
require("dotenv").config();

const CLIENT_KEY = process.env.CLIENT_KEY;

const season = 'spring';
const year = 2015;
const animeId = 27775;

// Exception Testing

test('rejects an invalid year', () => {
    expect(getSeason(season, '2015')).rejects.toThrow('[TAKI] Invalid Year');
    expect(getSeason(season, '')).rejects.toThrow('[TAKI] Invalid Year');
});

test('rejects an invad season', () => {
    expect(getSeason(1, year)).rejects.toThrow('[TAKI] Invalid Season');
    expect(getSeason('', year)).rejects.toThrow('[TAKI] Invalid Season');
});

// Logic Testing

test('Get Seasonal Data', async () => {
    setClientKey(CLIENT_KEY);
    const data = await getSeason(season, year);
    expect(data.data[9].node.id).toBe(animeId);
});