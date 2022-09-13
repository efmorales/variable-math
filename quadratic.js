/* ## Bonus

#### `quadratic.js`

Create three variables, `a`, `b`, and `c`.

Set them to any numbers you please as long as:
* a is not zero
* `b²` is greater than or equal to `4 × a × c`

Now use the quadratic formula (oh no) to calculate two value of two new variables, `x1` and `x2`.

<img src="https://i.ytimg.com/vi/lhQKfuAVkm4/maxresdefault.jpg" width="400px" />

Note: you'll need to do the formula twice. For `x1`, use a + in place of the ± symbol. For `x2`, use a -.

*/

let a = 1
let b = 9
let c = 2

let b2 = b - 18 // -9
let op1 = Math.sqrt((b ** 2) - (4 * a * c)) // 8.544

let x1 = (b2 + op1) / 2 * a
let x2 = (b2 - op1) / 2 * a

console.log(`For the fist version of the cuadratic formula, the addition ver. has the result of: ${x1}`)
console.log(`For the fist version of the cuadratic formula, the substraction ver. has the result of: ${x2}`)
