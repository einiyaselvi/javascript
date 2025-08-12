//Fill(value,start,end)
/*
let n =[1,2,3,4,5];
console.log(n); //[1, 2, 3, 4, 5]

let n =[1,2,3,4,5];
n.fill('20');
console.log(n); //['20', '20', '20', '20', '20']

*/
let n =[1,2,3,4,5];
n.fill(20,3,4);
console.log(n); //[1, 2, 3, 20, 5]
