//const JsUser={} #object
const mysym= Symbol("key1")

const JsUser={
    name: "Hitest",
    "full name":"Satu Samanta",
    //mysym:"mykey1",
    [mysym]:"mykey1",
    age:18,
    location:"jaipur",
    email:"hitesh2google.com",
    isLoggedIn:false,
    lastLogin:["Monday","Saturday"],
}
//console.log(JsUser.email)
//console.log(JsUser["email"])
//Both are corrct above.
//console.log(JsUser["full name"])
//console.log(typeof JsUser.mysym);    #return string 
//console.log(JsUser[mysym]);
//console.log(typeof JsUser[mysym]);
//JsUser.email="SATU@"
//Object.freeze(JsUser)//freez all change:
//JsUser.email="samanat@"
//console.log(JsUser);
JsUser.greeting = function(){
    console.log("Happy new Year");
}

JsUser.greeting_2024 = function(){
    console.log(`Happy new Year: ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting_2024());



