//this key word tell about current context

const user = {
    username:"Hitesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username},Welcome to website`);
        console.log(this);
    }
}

//user.welcomeMessage()
//user.username="sam"
//user.welcomeMessage()
//console.log(this);//output it will give  {}

// function chai(){
//     let username="hitesh"
//     console.log(this.usernam);
// }
//chai()// out put :undefined,we cant use this in fuction.

//*****************/
// const chai = function (){
//        let username="hitesh"
//          console.log(this.usernam);
//     }
// chai()

//************* */
//     const chai = ()=>{
//         let username="hitesh"
//           console.log(this.usernam);
//      }
//  chai()

// const addTwo = (num1,num2) =>{
//     return num1+num2
// }
// console.log(addTwo(3,4))
 
//const addTwo = (num1,num2) =>num1+num2


////-----///
// const addTwo = (num1,num2) =>(num1+num2)

//     console.log(addTwo(3,4))
///---///

const addTwo = (num1,num2) =>({username:"Hitesh"})//passing objct

    console.log(addTwo(3,4))


