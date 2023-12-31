// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"a",4:"b"}
// // const obj3 = {obj1, obj2}
// // console.log(obj3);  o/p:{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({},obj1, obj2)
// //console.log(obj3);//o/p:{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj3[2]); //o/p:b
// //const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {firstName : "Akshay", lastName: "Saini", age:26},
    {firstName : "Donal", lastName: "Trumph", age:75},
    {firstName : "Elon", lastName: "Musk", age:50},
    {firstName : "Deepika", lastName: "pADUKON", age:26},
]

// const output = users.reduce(function(acc,curr){
//     console.log(`accumulator :${[curr.age]} and current value ${curr}`);
//     console.log(acc[curr.age]);
// return acc;
// },{})
const output = users.reduce(function(acc,curr){
    console.log(acc);
if(acc[curr.age]){
   
    acc[curr.age] = ++acc[curr.age];
}else{
    acc[curr.age] = 1;
  
}
return acc;
},[]);

// console.log(output);


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