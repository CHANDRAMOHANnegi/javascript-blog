
// const length = 4;
// const numbers = [];
// // var i;
// for (var i = 0; i < length; i++) {
//     // does nothing
// }
// {
//     // a simple block
//     numbers.push(i + 1);
// }

// console.log(numbers);





/***************************/
/***************************/


// const arr = [1, 2, 3]
// arr[5] = 'hello';


// arr.forEach(e => console.log(typeof e))

//  console.log(arr)
//  console.log(arr.length)





/***************************/
/***************************/



// (function () {
//     var a = b = 3;
// })();


// console.log(b)

// console.log("b defined? " + (typeof b !== 'undefined') + "  " + b);
// console.log("a defined? " + (typeof a !== 'undefined') + "  " + a);





/***************************/
/***************************/



// var length = 10;
// function fn() {
//     console.log(this.length);
// }
// var obj = {
//     length: 5,
//     method: function (fn) {
//         fn();
//         arguments[0]();
//     }
// };

// obj.method(fn, 1);




/***************************/
/***************************/



// (function () {
//     try {
//         throw new Error();
//     } catch (x) {
//         var x = 1, y = 2;
//         console.log(x);   // 1
//     }
//     console.log(x);  // undefined
//     console.log(y);  // 2
// })();





// Array.prototype.mymap = function (callback) {
//     const resultArray = [];
//     for (let index = 0; index < this.length; index++) {
//         resultArray.push(callback(this[index], index, this));
//     }
//     return resultArray;
// }

// const sample = [1, 2, 3]

// sample.mymap(val => console.log(val))