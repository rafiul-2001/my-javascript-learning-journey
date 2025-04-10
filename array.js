// pop, opposite of push in js is shift. shift remove element from the begining
// push,opposite unshift. unshift add element in the begining of the array exe:arr.unshift(4)   




/*let name = ["ab", "bc", "cd"];
console.log(name); // it will display as [ 'ab', 'bc', 'cd' ]

name.push("de");
console.log(name);  // it will be: [ 'ab', 'bc', 'cd', 'de' ]
name.pop();
console.log(name.length());
*/





//size declaration
let arr = new Array(4);
console.log(arr[3]); // not initilize thus : undefine






// concatenate array
let a = ["ab", "bc", "cd"];
let b = ["ab", "bc", "cd"];
let c = a.concat(b);
console.log(c);





// confusion: 
let abc = new Array(1);
console.log(abc.length);
abc.push(3);
abc.push(4);
abc.push(5);
console.log(abc.length);