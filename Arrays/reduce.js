const nums = [{ age: 20, name: "cm" }, { age: 55, name: 'pm', }];

const myMap = nums.reduce((acc, curr, index) => {
    return { ...acc, [curr.age]: curr };
}, {})

console.log(myMap);

