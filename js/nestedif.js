//Nested if statement
/*
if(condition){
    if(condition){
        //statement
    }else{
        //statement
    }
else{
    //statement
}
*/

let eng = 80, tam = 98, maths = 85;
let total , avg;

total = eng + maths+ tam;
avg = total/3;

console.log("total : "+ total);
console.log("avg : " + avg.toFixed(2));

if(eng>= 35 && tam >=35 && maths >= 35){
    console.log("you are just pass");

    if(avg >= 90 && avg > 90 && avg >= 35){
        console.log("You are first pass");
    }else if(avg >= 80 && avg <=90 ){
        console.log("You are second pass");
    }else{
        console.log("You are third pass");
    }
}
else{
    console.log("you are fail");
    console.log("You are not eligible for pass");
}



