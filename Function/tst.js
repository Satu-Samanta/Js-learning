// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"a",4:"b"}
// // const obj3 = {obj1, obj2}
// // console.log(obj3);  o/p:{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({},obj1, obj2)
// //console.log(obj3);//o/p:{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj3[2]); //o/p:b
// //const obj3 = {...obj1,...obj2}
// console.log(obj3);

// const users = [
//     {firstName : "Akshay", lastName: "Saini", age:26},
//     {firstName : "Donal", lastName: "Trumph", age:75},
//     {firstName : "Elon", lastName: "Musk", age:50},
//     {firstName : "Deepika", lastName: "pADUKON", age:26},
// ]

// const output = users.reduce(function(acc,curr){
//     console.log(`accumulator :${[curr.age]} and current value ${curr}`);
//     console.log(acc[curr.age]);
// return acc;
// },{})
// const output = users.reduce(function(acc,curr){
//     console.log(acc);
// if(acc[curr.age]){
   
//     acc[curr.age] = ++acc[curr.age];
// }else{
//     acc[curr.age] = 1;
  
// }
// return acc;
// },[]);

// // console.log(output);


// console.log(users.firstName); // Output: Akshay
// console.log(users[1].lastName);  // Output: Trumph
// console.log(users[2].age);       // Output: 50

// const ageCount = users.reduce((acc, curr) => {
//     acc[curr.age] = (acc[curr.age] || 0) + 1;
//     return acc;
// }, {});

// console.log(ageCount);

// const usersByAge = users.reduce((acc, curr) => {
//     acc[curr.age] = curr;
//     return acc;
// }, {});

// console.log(usersByAge);
// const ageGroupedUsers = users.reduce((acc, curr) => {
//     acc[curr.age] = acc[curr.age] || []; // Initialize an array if it doesn't exist
//     acc[curr.age].push(curr);
//     return acc;
// }, {});

// console.log(ageGroupedUsers);


// const numbers =[65,44,12,4];
// const newArray = numbers.forEach((items,index,arr)=>arr[index] = items*10)
// console.log(numbers,newArray);


// @Satu-Samanta ➜ /workspaces/Js-learning/Function (main) $ node tst.js
// [ 650, 440, 120, 40 ] undefined

const arr = [2,5,3,4,7];
const mapRsult = arr.map((arr)=>arr+2)

// const forEachResult = arr.forEach((ar,i)=> arr[i]=ar*10);
// console.log(mapRsult,forEachResult,arr);
// @Satu-Samanta ➜ /workspaces/Js-learning/Function (main) $ node tst.js
// [ 4, 7, 5, 6, 9 ] undefined [ 20, 50, 30, 40, 70 ]
// @Satu-Samanta ➜ /workspaces/Js-learning/Function (main) $ 

