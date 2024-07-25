// 2-main.js
import HolbertonCourse from "./2-hbtn_course.js";

const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"]);
console.log(c1.name); // Should output: ES6
c1.name = "Python 101";
console.log(c1); // Should output: HolbertonCourse { _name: 'Python 101', _length: 1, _students: [ 'Bob', 'Jane' ] }

try {
    c1.name = 12; // Should throw an error
} catch (err) {
    console.log(err); // Should output: TypeError: Name must be a string
}

try {
    const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]); // Should throw an error
} catch (err) {
    console.log(err); // Should output: TypeError: Length must be a number
}
