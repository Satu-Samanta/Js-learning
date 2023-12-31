const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
// const obj3 = {obj1, obj2}
// console.log(obj3);  o/p:{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj3 = Object.assign({},obj1, obj2)
//console.log(obj3);//o/p:{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj3[2]); //o/p:b
//const obj3 = {...obj1,...obj2}
console.log(obj3);