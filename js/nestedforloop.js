

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

