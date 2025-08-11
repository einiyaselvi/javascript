//concat 

const n1 = [1,2,3.4,5];
const n2 = [6,7,8,9,10];
const n3 = [11,12,13,14,15];

let n4 = n1.concat(n2,n3, 35,55,65);
console.log(n4);

n4 = n1.concat(n2,n3, 35,55,65,[a,b,c,d]);
console.log(n4);
console.table(n4);