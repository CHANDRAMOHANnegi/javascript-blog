
/**
 * our own map function
 * */ 
Array.prototype.mymap = function(callback) {
    const resultArray = [];
    for (let index = 0; index < this.length; index++) {
        resultArray.push(callback(this[index], index, this));
    }
    return resultArray;
}

/**
 * `this` refers to the array on whichmymap is done. `this` is the array * itself
 * */ 

const sample = [1, 2, 3]

sample.mymap(val => console.log(val)) //1,2,3