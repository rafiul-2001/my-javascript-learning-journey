// variable changed it data type !!! what the heck
let a="abc";
console.log(typeof(a));
a=56;
console.log(typeof(a));



// sort function works on string not on numbers. to sort number u have to add anonymous function
let ar=[9,8,7,6,5,4,65,8,4,9,1,678,1];
ar.sort();
console.log(ar); // doesn't work

ar.sort(function(a,b){
    return a-b;
});
console.log(ar); // now it is working




/*
let ab = 011221; // decimal with leading zero  is not allowed in javascript
let ab = 1234; // this will do
*/