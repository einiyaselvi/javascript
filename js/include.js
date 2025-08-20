//include(value, start_index)  --> like boolean method (true or false)

const products = ["pen", "pencil", "eraser", "sharpner", "scale", "pen"]; 
/*
let result = products.includes("pencil");
console.log(result); //true 
// */
let result = products.includes("boxes");
console.log(result); //false

result = products.includes("pen", 0);
console.log(result); //false

result = products.includes("pen", 2);
console.log(result); 



