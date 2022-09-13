/*
#### `distance.js`

Create four variables, `x1`, `y1`, `x2`, and `y2` and store numbers in each of them.

Calculate the distance between coordinates (x1, y1) and (x2, y2). Log this distance out to the user in a human readable sentence.

The distance formula along with an example can be found below.

<img src="https://cdn.tutors.com/assets/images/courses/math/geometry-help/tutors-how-to-use-the-distance-formula.jpg" width="400px"/>


Remember, squaring a number or an expression just means to multiply that number or expression by itself.  We can use the following syntax operations to square the number 5.

```
let a = 5;
let aSquared = a*a;

let b = 5;
let bSquared = b**2;

//both aSquared and bSquared will result to 25
```
*/

let x1 = 1
let y1 = 3
let x2 = 7
let y2 = 6

let middleStep1 = x2 - x1
let middleStep2 = y2 - y1

let stepA = middleStep1 ** 2
let stepB = middleStep2 ** 2

let stepC = stepA + stepB

console.log(Math.sqrt(stepC, 2))

/* 
v2
dist = ((((x2-x1)**2) + ((y2-y1)**2))**.5)
v3
dist = Math.sqrt(((x2-x1)**2) + ((y2-y1)**2))
*/