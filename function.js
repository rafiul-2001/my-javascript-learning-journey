/*
//basic function

function squre(num){ // function start with "function" keyword
    return num*num;
}
console.log(squre(5));
*/






/*
// immediately Invokable Function Expression (IIFE)
// (function x())()  nothing, just whole function is inside parenthisis and followed by a parenthesis
// ki luv? function create kore call kora lagbe na;

(function squre(num){
    console.log(num*num)
})(7);
//squre(8); this line won't work. because IIFE function work once only.
*/





/*
//Function Expression
// eida abar ki? function ke ekta variable e insert kore sei variable ke function hisebe use kora jay
//important: OOP er jnne lage. constructor er vetor function create kore ekta variable e insert kore constructor er baire theke call kora jay. but a little difference

let rafiul = function squre(num){
    console.log(num*num);
}
rafiul(9);
//squre(10); This line won't work. taile luv ki hoilo? real squre function r variable function 2 tai workable howa usit silo na?
*/


/*
//anonymous function, can be used for evenListener
function(){
    // do what u want
}
*/