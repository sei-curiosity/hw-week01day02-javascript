# Javascript Homework

1.  Variables
    - https://www.youtube.com/watch?v=cXUWYZXru6o (7 min video)
    - https://www.codeanalogies.com/jsconstruction/ (interactive game)

2.  Conditions
    - https://blog.codeanalogies.com/2018/06/18/javascript-booleans-explained-by-going-to-court/ (reading)


## Assignment Operator
Without running the following code, try to determine:

```js
let a = 1;
let b = 'bongos';
let c = true;

a = b;
b = c;
c = a;
```

### Your solution here:
A = bongos ;
B = true ;
c = 1 ;
```

## Concatenation
Use the `+` operator to concatenate these strings together within a `console.log()`: "Please", "squeeze", "the", "cheese". Make sure there are spaces in-between each word.

```js
const firstWord = "Please";
const secondWord = "squeeze";
const thirdWord = "the";
const fourthWord = "cheese";
```
Result should be:
```js
"Please squeeze the cheese"
```

### Your solution here:

const firstWord = "Please";
const secondWord = "squeeze";
const thirdWord = "the";
const fourthWord = "cheese";
const sentence = firstWord + " "+secondWord + " "+ thirdWord + " "+ fourthWord ;
console.log(sentence);



### Your solution here:
const num1 = 5;
const num2 = 10;
if (num1 + num2 ==15){ 
console.log ("The sum of 5 and 10 is 15");
}


```

## Comparisons
By just looking at the following expressions, determine in your mind whether or not each will evaluate to true or false
```
a) 999 > 999
b) 999 === 999 
c) 999 !== 999
d) -5 >= -4
e) 100 <= -100
f) 20 + 5 < 5 
g) 81 / 9 === 9
h) 9 !== 8 + 1
```
### Your solution here:
7.  Write `true` or `false` based on the list above
```
a) false
b) true 
c) false
d) false
e) false
f) false
g) true
h) false

```

## Conditionals
Declare a variable equal to a number 0 to 100

Write a conditional statement that...
- If it is a multiple of 3, print “Fizz” instead of the number.
- If it is a multiple of 5, print “Buzz” instead of the number.
- If it is a multiple of both 3 and 5, print “FizzBuzz” instead of the number.
- Otherwise, print the number

### Your solution here :
8.  Write your javascript solution below

```js
// your answer here

let number = 33

if (number % 3 === 0 && number% 5 === 0 ){
     console.log('fizzBuzz')
}
else if( number %5 === 0) {
     console.log('Buzz')
} 
else if (number % 3 === 0  ){
   console.log('fizz')
}

```

#### BONUS
9.  Research a [loop](https://javascript.info/while-for) so that your condition runs on every number from 0 to 100
```js
// your answer here

for (let number=0 ; number <=100 ; number++ )
{console.log(number);  
 } 
  ```
10.  Research a [function](https://javascript.info/function-basics) so that your condition runs on every number from 0 to whatever number is passed into the function
```js
// your answer here
```

