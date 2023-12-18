// Single ton & constructor

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isloggedIn = false

console.log(tinderUser);


const regularUser = {
    email : " someone@gmail.com",
    fullname :{
        userfullname : {
            firstnam:"Hitesh",
            lastname: "Choudhary"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstnam);


//***object merge****

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
//const obj3 = {obj1, obj2}
//console.log(obj3);