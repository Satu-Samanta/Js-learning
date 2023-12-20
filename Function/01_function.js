//console.log("H");
//console.log("I");
//console.log("T");
//console.log("E");
//console.log("s");
//console.log("H");

function syaMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("s");
    console.log("H") 

}
//syaMyName()

function addTwoNumber(numbr1,number2){
    console.log(numbr1+number2);
}
//addTwoNumber(3,7)
//addTwoNumber(3,"7")
//addTwoNumber(3,"a")
//addTwoNumber(3,null)

//const result = addTwoNumber(3,7)
//console.log(`Result :  ${result}`);

function addTwoNumber (numbr1 , number2 ){
    //let result = numbr1+number2;
    //return result
    return numbr1+number2
}
//const result1 = addTwoNumber(3,7)
//console.log(`Result :  ${result1}`);

function logInUserMessage(username){
    return `${username} just looged in`
}
//console.log(logInUserMessage("HITESH"))
//console.log(logInUserMessage())

//*************/

function logInUserMessage(username){
    if(username===undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just looged in`
}
//console.log(logInUserMessage("HITESH"))
//console.log(logInUserMessage())

///-----------------------------------///

function logInUserMessage(username){
    if(!username){ //username ===undifined means false so use ! for true //
        console.log("Please enter a username");
        return
    }
    return `${username} just looged in`
}
//console.log(logInUserMessage())
//+++++++++++++++++++

function logInUserMessage(username="sam"){
    if(!username){ //username ===undifined means false so use ! for true //
        console.log("Please enter a username");
        return
    }
    return `${username} just looged in`
}
//console.log(logInUserMessage())

console.log(logInUserMessage("Hitesh"))//overwright