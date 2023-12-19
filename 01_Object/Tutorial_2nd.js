// Single ton & constructor

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isloggedIn = false

//console.log(tinderUser);


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

//const obj3 = Object.assign({},obj1, obj2)

//console.log(obj3);
//console.log(obj3[2]);
const obj3 = {...obj1,...obj2}
//console.log(obj3);

const users = [
    {
        id:1,
        email:"H@GMAIL.COM",
    
    },
    {
        id:1,
        email:"H@GMAIL.COM",
    },
    {
        id:1,
        email:"H@GMAIL.COM",
    
    },

]

users[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser))//return data tupr array we can use loop for the same
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isloggedIn '))

