const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Enter the URL: ", function (input) {
    const urlPattern = /^(https?:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[a-zA-Z]+$/;
    if (urlPattern.test(input)) {
      console.log("Valid URL: ", input);
    } else {
      console.log("Invalid URL: ", input);
    }
})