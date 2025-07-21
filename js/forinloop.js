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