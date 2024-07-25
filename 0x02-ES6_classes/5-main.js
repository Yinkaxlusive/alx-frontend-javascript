// 5-main.js
import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
    new TestBuilding(200);
} catch (err) {
    console.log(err); // Should output: Error: Class extending Building must override evacuationWarningMessage
}