const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNumbers.map( (num) =>num+10 )
// console.log(newNum);
// o/p:-->[
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
//   ]

// const newnums= myNumbers.map( (num) => num *10).map( (num) =>num+1)
// console.log(newnums);
// [
//     11, 21, 31, 41,  51,
//     61, 71, 81, 91, 101
//   ]
//else
const newnums= myNumbers
.map( (num) => num *10)
.map( (num) =>num+1)
.filter((num)=>num>=40)

console.log(newnums);

// [
//     41, 51,  61, 71,
//     81, 91, 101
//   ]

