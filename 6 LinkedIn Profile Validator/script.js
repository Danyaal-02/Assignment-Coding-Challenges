const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Enter the URL: ", function (urlPattern) {
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
    if (regex.test(urlPattern)) {
        console.log(`${urlPattern} is a valid LinkedIn profile URL.`);
      } else {
        console.log(`${urlPattern} is not a valid LinkedIn profile URL.`);
      }
})