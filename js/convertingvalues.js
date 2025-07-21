// Looping over object by converting to an value

let user = {
    name: "joe",
    age: 35,
    city:"salem",
    contact: "1234567890",
};

//values of an object can be converted to an array using Object.values()
let arr_values=Object.values(user);
console.log(arr_values);

for(let i = 0; i < arr_values.length;i++){
    console.log(arr_values[i]);
}

// Looping over object by converting to an array of keys
let arr_keys=Object.keys(user);
console.log(arr_keys);

for(let i = 0; i < arr_keys.length;i++){
    console.log(arr_keys[i]);
}

