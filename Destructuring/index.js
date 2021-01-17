
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1, 2, 3];
[arr[1], arr[0]] = [arr[0], arr[1]];
console.log(arr); // [2,1,3]



