// let know difference between const , var and let;

//const = const is a constant that cannot alter during the execution of program it fixed for whole program when we initialise it. and it also a block scope ;

// let = this is block scope / function block variable that is used in same block where we initialise it .scope are started and ending with curly braces {};
// var = var is a global scope variable we can initialise it anywhere of program and access from any where of program for that it create lot of error and problem for programer ;
const a = "Atul";
// a = "abhay"; // we cannot alter const variable during the program;
console.log(a);

let b = 4;
b = 5;
console.log(b); // it return 5 as value of b;

console.log(c); // when we want access data which is not initialise than it return undefined it apply only var
// var is a concept of old js;
// curently we are using es6 new js;
var c = 6;
c = 7; // it also changeable and we can access from anywhere of program;
console.log(c);