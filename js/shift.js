//SHIFT()

let students = ['John', 'Joe', 'Kavi', 'karthick', 'Mary', 'Maya'];
console.log("Before Shift: " + students); 
const element = students.shift();
console.log("After Shift " + students); // ['Joe', 'Kavi', 'karthick', 'Mary', 'Maya']
console.log("Shifted Element: " + element); // 'John'

//Using shift with numbers
let numbers = [10, 20, 30, 40, 50];
console.log("Before Shift: " + numbers); 
const shiftedNumber = numbers.shift();
console.log("After Shift: " + numbers);



