//Nullish coalesecing operator (??)

const a = null??'No value';
console.log(a);


const b= null??45;
console.log(b);

//?? 
const user={'name':'joe'};
console.log(user);
console.log(user.name);
user.city??'salem';
console.log(user.city);
