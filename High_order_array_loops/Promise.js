// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task is completed');
//         resolve()
//     },1000)
// })
// promiseOne.then(function(){
//  console.log("Promise consumed");
// })
//resolve conncted with 'then',we get call 
//back function inside 'then' & recived argument .

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async2 completed');
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Promise consumed");
// })

// @Satu-Samanta ➜ /workspaces/Js-learning/High_order_array_loops (main) $ node Promise.js
// Async2 completed
// Promise consumed