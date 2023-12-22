const mynums = [1,2,3]

const myTotal = mynums.reduce(function (accumulator,currentvalue) {
    //console.log(`accumulator :${accumulator} and current value ${currentvalue} `);
   // return accumulator + currentvalue
//},0)// starting with 0
// accumulator :0 and current value 1 
// accumulator :1 and current value 2 
// accumulator :3 and current value 3 
// 6
},3)// starting with 3
// accumulator :3 and current value 1 
// accumulator :4 and current value 2 
// accumulator :6 and current value 3 
// 9
// console.log(myTotal);


//Using arrow function

const MyTotal1 = mynums.reduce( (acc,curr) =>acc+curr,0)
console.log(MyTotal1)


const shopingCart = [
    {
    itemName: "js course",
    price:2999 
    },
    {
        itemName: "py coure",
        price:1999 
        },
        {
            itemName: "mobile dvcourse",
            price:5999 
            },
            {
                itemName: "data science course",
                price:12999 
                }
]
const PriceToPay = shopingCart.reduce( (acc,item) =>(acc + item.price),0)
console.log(PriceToPay)