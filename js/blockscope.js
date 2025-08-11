/*if(true){
    let blockScopevariable = "I am einiya selvi";
    console.log(blockScopevariable);
} // only can assess in the block scope
// console.log(blockScopevariable); // This will throw an error if uncommented


if(true){
    var blockScopevariable = "I am einiya selvi"; // using var allows access outside the block
    console.log(blockScopevariable);
}
console.log(blockScopevariable); // but this becomes conflict (confusion of so many words)
*/

function myFunction(){
    var funScopeVariable = "I am einiya selvi";
    console.log(funScopeVariable);

    function add(){
        console.log(functionScopeVariable);
    }
    add();
}
myFunction;