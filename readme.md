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

![hoisting temporal zone](images/hoisting-temporal.webp)

Accessing myVar before declaration evaluates to undefined. A hoisted var variable, before its initialization, has an undefined value.

However, accessing myConst before the declaration line throws a ReferenceError. const variables are in a temporal dead zone until the declaration line const myConst = 3.14.

</details>
