
/**
 *Primitive values are copied by value
 */
function primitiveMutator(val) {
    val = val + 1;
}
let x = 1;
primitiveMutator(x);
console.log(x); // 1



/**
 *Non-primitive values are copied by reference
 */
function objectMutator(val) {
    val.prop = val.prop + 1;
}
let obj = { prop: 1 };
objectMutator(obj);
console.log(obj.prop); // 2
