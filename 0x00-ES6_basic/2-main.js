import getNeighborhoodsList from './2-arrow.js';

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res); // Should output: [ 'SOMA', 'Union Square', 'Noe Valley' ]

