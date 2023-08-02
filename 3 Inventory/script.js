const priceInUSD = {
    "apple": 0.99,
    "banana": 0.75,
    "orange": 1.25,
    "avocado": 1.50,
    "bread": 2.49,
    "milk": 1.99,
    "eggs": 2.29,
    "chicken": 4.99,
    "rice": 3.49,
    "pasta": 1.79,
    "tomato": 0.89,
    "cucumber": 0.69,
    "lettuce": 1.19,
    "potato": 0.49
  }

let priceInINR={}
Object.keys(priceInUSD).map((ind)=>{
    priceInINR[ind]=priceInUSD[ind]*80
})
console.log(priceInINR)