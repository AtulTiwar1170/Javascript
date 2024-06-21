const val1 = "4";
const val2 = 5;
const val3 = "atul";
console.table([
    (val1 + val2),
    (val2 + val2), 
    (val1 + val1), 
    (val3 + val1), 
    (val3 + val2), 
    (val3 + val3)
]);

console.log(val1 + val2 + val3); //string
console.log(val1 + val2 + val2); //string
console.log(val1 + val1 + val3); //string
console.log(val1 + val1 + val2); //string
console.log(val2 + val1 + val3); //string
console.log(val2, val2, val1);
console.log(val2 + val2 + val1); // first two values are adding and last one is merging with ans of first two values.
