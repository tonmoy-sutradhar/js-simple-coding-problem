// swap 2 value----------------->>>.
let a = 5;
let b = 7;

console.log(a, b);
// a = b;
// b = a;

const temp = a;
a = b;
b = temp;

console.log(a, b);

// ------------------>>
console.log("<<<<---------------------->>>>");
let x = 4;
let y = 7;

console.log(x, y);
[x, y] = [y, x];
console.log(x, y);
