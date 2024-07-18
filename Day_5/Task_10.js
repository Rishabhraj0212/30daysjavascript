const applyFunctions = (func1, func2, value) => {
    const result1 = func1(value);
    const result2 = func2(result1);
    return result2;
};

// Example functions
const addTen = (num) => num + 10;
const double = (num) => num * 2;

// Example usage
let value = 5;
let result = applyFunctions(addTen, double, value);
console.log(result);  // Output: 30
