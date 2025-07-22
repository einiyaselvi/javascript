//string function 

let first_name="hello";
let last_name="world";


//concatenation
let c=first_name+" "+last_name;
console.log("concatenation : " +c); 

c = first_name.concat(" ", last_name);
console.log("concat : "+c);

//append
c="hi";
c+="einiya"
console.log("append : "+c);

//Escaping
c="hi, i can\'t go to school";  //use (can\'t ) ---> escaping
console.log("Escaping : "+c);

//length
c=first_name.length;
console.log("length : "+c);

//uppercase
c=first_name.toUpperCase();
console.log("uppercase : "+c);

//lowercase
c=last_name.toLowerCase();
console.log("lowercase : "+c);

//indexOf
c=first_name.indexOf("l");  
console.log("indexOf : "+c);

c=first_name.lastIndexOf("l");
console.log("lastIndexOf : "+c);

//charAt
c=first_name.charAt(2);     
console.log("charAt : "+c);

c=first_name.charCodeAt(2);
console.log("charCodeAt : "+c);

//substring
c=first_name.substring(1,3);  //substring(start, end)
console.log("substring : "+c);

  
