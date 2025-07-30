//Flattening an array in JavaScript
//Flattening is the process of converting a multi-dimensional array into a single-dimensional array


/*
let nestedArray = [[1, 2], [3, 4], [5, 6]];
let flattenedArray = nestedArray.reduce((accumulator, currentValue) => accumulator.concat(currentValue));
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

let colors= ['red', 'green', 'blue', 'pink', 'yellow'];
let colorCounts = colors.reduce((accumulator, currentValue) => {

},{});
console.log(colorCounts); // undefined


let colors= ['red', 'green', 'blue', 'pink', 'yellow'];
let colorCounts = colors.reduce((accumulator, currentValue) => {
    if(currentValue in accumulator) {
        accumulator[currentValue]++;
    }else{
        accumulator[currentValue] = 1;
    }
    return accumulator;

},{});
console.log(colorCounts); // Output: { red: 1, green: 1, blue: 1, pink: 1, yellow: 1 }

let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, currentValue) => {
    return Math.max(accumulator, currentVAlue);
});
console.log(sum);
*/
const group = [
  { name: "Alice", city: "Chennai" },
  { name: "Bob", city: "Mumbai" },
  { name: "Charlie", city: "Chennai" },
  { name: "David", city: "Delhi" }
];

const groupedByCity = group.reduce((accumulator, currentValue) => {
    if (accumulator.hasOwnProperty(currentValue.city)) {
        accumulator[currentValue.city].push(currentValue);
    } else {
        accumulator[currentValue.city] = [currentValue];
    }
    return accumulator;
}, {});
console.log(groupedByCity);
