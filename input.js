function fizzBuzz(max) {
    let i = 0
    while (i <= max) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(`FizzBuzz(${i})`)
        } else if (i % 3 == 0) {
            console.log(`Fizz(${i})`)    
        } else if (i % 5 == 0) {
            console.log(`Buzz(${i})`)    
        } else {
            console.log(i)    
        }
        i ++
    }

}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Please enter a number greater than ZERO:`, (inputNum) => {
    console.log(`We'll FizzBuzz all numbers from Zero to ${inputNum}`)
    fizzBuzz(inputNum)
    readline.close()
  })