let a = "56.123";
console.log(typeof(a));
console.log(typeof(Number(a)));


// convert string or boolean to number format here is a function: Number(x)
// another option is parseInt(x) or parseFloat(x)
let b = Number(a);
console.log(typeof(b));

// after decimal point how many float digit u want?

console.log(b.toFixed(2));

// how many digit u want? doesn't care about decimal point

console.log(b.toPrecision(3));

// convert number to string

console.log(typeof(toString(b)));
