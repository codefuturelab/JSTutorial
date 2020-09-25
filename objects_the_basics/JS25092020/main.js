// ? 
//"use strict";
//let user = {};
//console.log(user); //undefined
//console.log(user.name.adress); // it gives error 
//console.log(user?.name?.adress); // it works fine  undefined 
/*
let user = null;
let x = 0;

user?.sayHi(x++); // nothing happens

alert(x); // 0, value not incremented */

var id = Symbol();
console.log(id);
var id = Symbol("id");
console.log(id.toString());
console.log(id.description);

let user = {
    name: "John"
};

let key  = Symbol("key");
console.log("key:");
console.log(key);
user[key] = 1;

console.log(user[key]);
console.log(user);
let anotherKey = Symbol("key");
console.log(anotherKey);
console.log(user[anotherKey]); 
let a = "name";
let b = "name";
console.log(user[a] + user[b]);
console.clear();
/////////////////////////////
let studentID = Symbol("id");
let student = {
    name : "Osman",
    age: 12,
    [studentID] : 123
}
console.log(user)
console.log(student[studentID]);

console.clear();

for (let k in student ) {
    console.log(k);
    
}
console.log(Object.keys(student));
let clone = Object.assign({},student);
console.log(clone[studentID]);

let idOne = Symbol.for("id");
console.log(idOne);
let idAgain = Symbol.for("id");
console.log(idAgain);
console.log(idAgain === idOne);
student[idOne] = "Ahmet";
console.log(student[idAgain]);

// keyFor 
console.log(Symbol.keyFor(idOne));
console.log(Symbol.keyFor(anotherKey)); // not global so undefined
console.log(anotherKey.description);

