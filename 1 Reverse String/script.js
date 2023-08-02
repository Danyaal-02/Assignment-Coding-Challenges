const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Enter the string: ", function (str) {
  setTimeout(function () {
    console.log("Reversed string: ",str.split("").reverse().join(""))
    rl.close()
  }, 2000)
})
