export {}

// slice index starting,index end
var re =/are/gi; 
var str = "Apples are round, and apples are juicy.";
var newstr = str.replace(re, "oranges"); 
console.log(newstr)
var re = /and/gi; 
var str = "Apples are round, and apples are juicy.";
if (str.search(re) == -1 ) { 
   console.log("Does not contain Apples" ); 
} else { 
   console.log("Contains Apples" ); 
} 

var str = "Apples are round, and apples are juicy."; 
var splitted = str.split(" ", 4); // starting, how many character or word
console.log(splitted)

var str = "Apples are round, and apples are juicy."; 
console.log("(1,2): "    + str.substr(2,7)); // index, legth
console.log("(-2,2): "   + str.substr(-2,5)); 
console.log("(1): "      + str.substr(1)); 
console.log("(-20, 2): " + str.substr(-20,4)); 
console.log("(20, 2): "  + str.substr(20,2));

var str = "Apples are round, and apples are juicy."; 
console.log("(1,2): "    + str.substring(1,2)); // index, index exclusive
console.log("(0,10): "   + str.substring(0, 12)); 
console.log("(5): "      + str.substring(5));

var str1 = new String( "This is beautiful string" ); // return 0 if match
  
var index = str1.localeCompare( "string  beautiful  is This");  

console.log("localeCompare first :" + index );