//solution of item#4
const firstWord = "Please";
const secondWord = "squeeze";
const thirdWord = "the";
const fourthWord = "cheese";

console.log(firstWord + " " + secondWord + " " + thirdWord + " " + fourthWord);

const num1 = 5;
const num2 = 10;
let num3 = num1 + num2;

//solution of item#5 & 6

console.log("The sum of " + num1 + " and " + num2 + " is " + num3);

//solution of item#7

/*
a) false
b) true
c) false
d) false
e) false
f) false
g) true
h) false
*/

//solution of item#8 & 9

for (let num = 0 ; num <= 100 ; num++) {
    multipleOf(num);

}//end loop


//solution of item#10

function multipleOf(number){
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
        
        } 
        else if (number % 5 === 0) {
        console.log("Buzz");
        
        } 
        else if (number % 3 === 0) {
        console.log("Fizz");
        }
        
        else {
        console.log(number);
        }
}// end of func