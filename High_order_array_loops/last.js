const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => num>4)
// console.log(newNums);//[ 5, 6, 7, 8, 9, 10 ]

//or//

// const newNums = myNums.filter((num) => {
//     return num > 4//explicit as {} means scope has ben startd
// })//for-each and here diffent is 
// //it is giving the rturn value which can be tored.
// console.log(newNums);//[ 5, 6, 7, 8, 9, 10 ]

const newNums = []

myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
})
console.log(newNums);//[ 5, 6, 7, 8, 9, 10 ]