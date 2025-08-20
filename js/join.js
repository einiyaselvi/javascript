//array.join(separator)

const products = ["apple", "banana", "cherry"];
console.log(products);


console.log(products.join()); //default , as a Separator
console.log(products.join(" | ")); //space as a separator
console.log(products.join(" - ")); //dash as a separator
console.log(products.join("")); //no separator
console.log(products.join(" ")); //custom separator
console.log(products.join(" and ")); //custom separator with 'and'