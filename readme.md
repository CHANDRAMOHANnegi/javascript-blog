## Question 1. Hoisting
## What happens if you access myVar and myConst before declaration?

```js
    myVar;   // => ???
    myConst; // => ???

    var myVar = 'value';
    const myConst = 3.14;
 ```

<details><summary><b>Answer</b></summary>
Hoisting and temporal dead zone are 2 important concepts that influence the lifecycle of JavaScript variables.

<br/>

<!-- ![hoisting temporal zone](images/hoisting-temporal.webp) -->
<img src="images/hoisting-temporal.webp" width="500" height="300" >

Accessing myVar before declaration evaluates to undefined. A hoisted var variable, before its initialization, has an undefined value.

However, accessing myConst before the declaration line throws a ReferenceError. const variables are in a temporal dead zone until the declaration line const myConst = 3.14.

</details>

## Question 2. Swapping variables
## Two variables values can be swapped in one destructuring expression.

<details><summary><b>Answer</b></summary>

Without destructuring assignment, swapping two values requires a temporary variable (or, in some low-level languages, the XOR-swap trick).
<br/>

```js 
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]

```
</details>


