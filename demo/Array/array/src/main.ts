export { }
// filter return array and every return true,false are the same
var alpha = ["a", "b", "c"];
var numeric = [1, 2, 3];

var alphaNumeric = alpha.concat(numeric.toString());
console.log("alphaNumeric : " + alphaNumeric);

var num = [7, 8, 9, 't'];
num.forEach(function (value) {
  console.log(value);
});

var arr = new Array("First", "Second", "Third", "yyyy");

var str = arr.join();
console.log("str : " + str);

var str = arr.join(", ");
console.log("str : " + str);

var str = arr.join(" + ");
console.log("str : " + str);

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
console.log("roots is : " + roots);

var total = [0, 1, 2, 3, 8].reduce(function (a, b) { return a + b; });
console.log("total is : " + total);

var arr = ["orange", "mango", "banana", "sugar", "tea"];
console.log("arr.slice( 1, 2) : " + arr.slice(1, 2));
console.log("arr.slice( 1, 3) : " + arr.slice(1, 3));

// function isBigEnough(element:Number, index:Numb) { 
//   return (element >= 10); 

// } 

// var retval = [2, 5, 8, 1, 4].some(isBigEnough);
// console.log("Returned value is : " + retval ); 

// var retval = [12, 5, 8, 1, 4].some(isBigEnough); 
// console.log("Returned value is : " + retval );

var arr = new Array("orange", "mango", "banana", "sugar");

var sorted = arr.sort();
console.log("Returned string is : " + sorted);

var arr = new Array("orange", "mango", "banana", "sugar");
var str = arr.toString();
console.log("Returned string is : " + arr);

var arr = new Array("orange", "mango", "banana", "sugar");
var str = arr.toString();
console.log("Returned string is : " + str);