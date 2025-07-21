let groups = [
    ["ram", "sam", "tiya"],
    ["maya", "sita", "gita"],
    ["john", "doe", "jane"],
];

for( let group of groups){
    inner:
    for( let member in group){
        if(member.startsWith('r')){
            console.log(member);
            break inner; // breaks out of the inner loop
        }
    } 
}