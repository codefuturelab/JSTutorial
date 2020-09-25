/* There are 7 primitive types:
 string, number, bigint, boolean, symbol, null and undefined */
 let str = "Hello";
 console.log(str.toUpperCase());
 let n = 1.23456;

console.log(n.toFixed(2));
console.log( typeof 0 );
console.log(typeof new Number(0));
let zero = new Number(0);
console.log(zero);
if (zero) { // zero is true, because it's an object
  console.log( "zero is truthy!?!" );
}
var num = Number("123"); 
console.log(typeof num);
// null/undefined have no methods
//console.log(null.test);
// console.log(null?.test) // undefine no err
let billion = 1000000000**9;
console.group(billion);

var num = 255;
console.log(num.toString(16))
console.log(num.toString(2))
console.log(num.toString(10))
console.log(12345..toString(32)) //Two dots to call a method
console.log(Math.PI)
console.log( isNaN(NaN) ); // true
console.log( isNaN("str") ); // true
console.log( NaN === NaN );

console.log( isFinite("15") ); // true
console.log( isFinite("str") ); // false, because a special value: NaN
console.log( isFinite(Infinity) ); // false, because a special value: Infinity
console.log(Object.is(NaN, NaN));
console.log(Object.is(0, -0));
let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;
let guestList = "Guests:\r\n * John\r\n * Pete\n * Mary";
console.log(guestList);