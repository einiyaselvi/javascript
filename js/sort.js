//sort

const names=["kumar", "kavi", "kiran","varun"];
console.log(names);
names.sort();
console.log("after sort:" +names);

const num = [10, 300, 20, 60, 50, 9];
console.log("Befor :" +num);
num.sort();
console.log("After :" +num);

//compare function
num.sort((a,b) => {
    return a -b;
});
console.log("Compare:" +num);

