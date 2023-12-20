function calculateCartPrice(num1){
    return num1
}
//console.log(calculateCartPrice(200))


function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(200,400,500))//return array
//o/p:-[ 200, 400, 500 ]


function calculateCartPrice(val1,val2,...num1){
    return num1
}
//console.log(calculateCartPrice(200,400,500,1000))
//o/p:-[ 500, 1000 ]

function calculateCartPrice(val1,val2,vul3,...num1){
    return num1
}
//console.log(calculateCartPrice(200,400,500,1000))
//o/p:-[ 1000 ]

function calculateCartPrice(val1,val2,vul3,...num1){
    return val1
}
console.log(calculateCartPrice(200,400,500,1000))
//o/p:-  200


/////////
const user = {
    username : "Hitesh",
    price : 199
}
function handleObject(anyobject){
    console.log(`Uername is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    username:"Sam",
    price:399
})

const myarray=[100,200,300,4000]

function returnSecondValue(getarray){
    return getarray[1]
}
//

console.log(returnSecondValue(myarray))
