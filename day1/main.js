const sum = require("./calculation/add");
const minus = require("./calculation/subtract");
const divide = require("./calculation/divide");
const multiply = require("./calculation/multiply");


console.log(sum(9,3));
minus(8,3);
divide(17,2);
multiply(7,3);


const merge = require("./calculation/merge");

console.log(merge.a(2,3));
merge.s(2,3);
merge.m(2,3);
console.log(merge.d(9,3));


