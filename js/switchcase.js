//switch case statement

/* 
switch(choice){
case choice:
    -------
    break;
    
default:
    -------
    break;
}
*/

let num = 0;

switch(num){
    case 1:
        console.log("You have selected option 1");
        break;
    case 2:
        console.log("You have selected option 2");
        break;      
    case 3:
        console.log("You have selected option 3");
        break;
    default:
        console.log("You have selected an invalid option");
        break;
} 


//example - 02

let letter =  'a';

switch(letter){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log(letter+ " is a vowel");
        break;
    default:
        console.log(letter+ " is not a consonant");
        break;
}

