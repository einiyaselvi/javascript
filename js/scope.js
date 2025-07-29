//scope in javascript
//two  types of scope -> block scope, function scope


//block scope
if(true){
    let blockScopedVariable = "I am block scoped";
    console.log(blockScopedVariable); // This will work
    console.log(blockScopedVariable);
}

//function scope

function myfunction() {
    var functionScopedVariable = "I am function scoped";
    console.log(functionScopedVariable); // This will work
}
myfunction(); // Call the function to see the output