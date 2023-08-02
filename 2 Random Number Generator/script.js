function generateRandomNumberWithDelay(delay) {
    let remainingTime = delay
    const interval = setInterval(function() {
      remainingTime -= 1000
      console.log("Time remaining: " + (remainingTime / 1000) + " seconds")
    }, 1000)
  
    setTimeout(function() {
      clearInterval(interval)
      const randomNum = Math.floor(Math.random() * 100)
      console.log("Generated random number: " + randomNum)
    }, delay)
  }
  
  const delayInSeconds = 3000
  generateRandomNumberWithDelay(delayInSeconds)
  