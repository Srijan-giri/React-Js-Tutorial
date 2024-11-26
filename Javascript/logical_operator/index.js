// && ||

let a = true;
let b = true;

console.log(a && b); // true / false
console.log(a || b);


function getName(name) {
    return name;
}

console.log(a && getName('John')); // false
console.log(a && getName('John')); // John

a = false;
console.log(a && getName('John')); // false



//* Template Literals

let name1 = "John";
let name2 = "Doe";

console.log(name1 + " " + name2);
console.log(`${name1} ${name2}`);

//* Ternary Operator

let showReceipeOne = false;

function getRecepieOneName(receipeName) {
    return receipeName;
}


function getRecepieTwoName(receipeName) {
    return receipeName;
}

// if (showReceipeOne) {
//     console.log(getRecepieOneName('Pizza'));
// }
// else {
//     console.log(getRecepieTwoName('Coke'));
// }


// condition?statement 1:statement 2

showReceipeOne
    ? console.log(getRecepieOneName('Pizza'))
    : console.log(getRecepieTwoName('Coke'));