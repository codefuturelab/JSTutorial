"use strict"
let str = `Hello I am a String`;
console.log("string".length);
console.log(str[0]);
console.log(str[str.length - 1]);
console.log(str.charAt(100)); // empty 
console.log(str[100]); /// undefined 
for (let char of str) {
    console.log(char);
}
//str[0] = "h";// error when use strict 
//console.log(str); 
str = "Hi";
str  = 'h' + str[1];
console.log(str);
console.clear();

console.log(str.toUpperCase());
console.log(str.toLowerCase());
str = "Hi am a String";
console.log(str.indexOf("am"));
console.log(str.indexOf("Hi"));
console.log(str.indexOf("g"));
console.log(str.indexOf("gulp")); // -1 
console.clear();
str = 'As sly as a fox, as strong as an ox';
console.log( str.indexOf('sly', 3) )
let pos = -1;
while(( pos = str.indexOf("as",pos +1)) != -1) {
    console.log(pos);
}
str = "Widget with id";
console.log(str.indexOf("Widget"));
if (str.indexOf("Widget")) {
    console.log("We found it"); // doesn't work!
}
if (str.indexOf("Widget") != -1) {
    console.log("We found it"); // works now!
}
console.log( "Widget with id".includes("Widget"));
console.log( "Widget with id".includes("Bye"));
console.log( "Widget".startsWith("Wid"));
console.log( "Widget".endsWith("Wid"));
console.clear();

 str = "stringify";
console.log( str.slice(0, 5) );
console.log( str.slice(5) );
console.log( str.slice(-5) );
console.log( str.slice(16, 17) ); // empty

str = "stringify";
console.log( str.substring(0, 5) );
console.log( str.substring(5) );
console.log( str.substring(-5) );
console.log( str.substring(17, 16) ); // empty

console.log(str.substr(0,2));
console.log(str.substr(0,5));
console.log(str.substring(-1,3));
console.log('a' > 'A');
console.log('a'> 'Ş');
console.log('aA'.codePointAt(1));
console.log(String.fromCodePoint(65));
console.log('ş'.localeCompare('s')); 
str = "Please locate where 'locate' occurs!";
console.log(str.search(/locate/i));
str = "Please visit MIcrosoft! Microsoft";
var n = str.replace("Microsoft", "W3Schools");
console.log(n);
str = "Please visit Microsoft!";
console.log(str.replace(/MICROSOFT/i, "W3Schools"));
str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");
console.log(n);
str = "Please LOCATE where 'LOCATE' occurs!";
console.log(str.search(/locate/i));
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);
console.log(text3);
console.clear();
let arr = str.split(" ");
console.log(arr[0]);
var intRegex = /[0-9 -()+]+$/;  
var myNumber = '999';
var myInt = myNumber.match(intRegex);
console.log(myInt);