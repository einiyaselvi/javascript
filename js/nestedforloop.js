const { use } = require("react");

// nested for loop
let nums=[];
for(let i = 0; i<3;i++){
    nums.push([]);
    for(let j = 0; j<3;j++){                
        nums[i].push(j);
    }
}
console.log(nums);
console.table(nums);


//example 2

let names = ["tiya", "maya", "sam", "ram"];
 
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}


//for of loop --> normal ah strings ah edukaraku use agum.
console.log("For of loop: ");
for (let name of names){
    console.log(name);
}

//for in loop --> properties ah eduthu print pananum or index 

let user = {
    name: "Joe",
    age: 35,
    city: "salem",
    contact: "1234567890",
};

for(let prop in user)
{
    console.log(prop+" : "+user[prop]);
}

