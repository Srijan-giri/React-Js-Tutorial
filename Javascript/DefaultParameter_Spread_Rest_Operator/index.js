
// default Parameters
function multiplication(a = 1, b = 2) {
    return a * b;
}

console.log(multiplication(2, 3)); //6
console.log(multiplication(2)); //NaN
console.log(multiplication()); //NaN  => undefined * undefined = NaN

// Rest Operator

const array2 = [2, 3, 4];
const array3 = [10, 11, 12];

console.log([999, ...array2, ...array3, 10000]);


// spread operator
function getInfo(a, ...args) {
    console.log(a);
    console.log(args);
    return "Sangam Mukherjee";
}

console.log(getInfo(1, 2, 3, 4, 5));