let arr = new Array();
let arra = [];
let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits);
console.log(fruits[1]);
fruits.forEach(element => {
    console.log(fruits.indexOf(element));
    console.log(element);
});

console.log(fruits[4]) // undefined
fruits[0] = "Domates";
arr = ['Apple', { name: 'John', surname: "Dennis" },
    true, function () { console.log('hello'); }];
console.log(arr[3]);
arr[3]();

console.log(arr[1].surname);
fruits = ["Apple", "Orange", "Pear"];
console.log(fruits.pop());
console.log(fruits);
fruits.push("Domates");
console.log(fruits);

console.log(fruits.shift());
console.log(fruits);
console.log(fruits.unshift("Apple"));
console.log(fruits);

// Methods push and unshift can add multiple elements at once:
fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

console.log(fruits);

////Array is an object and thus behaves like an object.
fruits = ["Banana"]
arr = fruits;
console.log(arr === fruits);
arr.push("Pear");
console.log(fruits);
/////////////
fruits = [];
fruits[99999] = 5;
console.log(fruits);
fruits.age = 25;
console.log(fruits);

arr = ["Apple", "Orange"];
console.log(arr);
arr.name = "Fruits";
console.log(arr);
console.log(arr.name);

arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// iterates over array elements
for (let ar of arr) {
    console.log(ar);
}
for (let i in arr) {
    console.log(arr[i]);
} //  we shouldn’t use for..in for arrays.

fruits = [];
fruits[123] = "Apple";

console.log( fruits.length ); 
arr = [1, 2, 3, 4, 5];

//length property is that it’s writable.
arr.length = 2; // truncate to 2 elements
console.log( arr );
arr.length = 5;
console.log(arr);
// So, the simplest way to clear the array is: arr.length = 0;.

arr = new Array(5);
console.log(arr.length);
arr = [1,2,3,4,5];
console.log(String(arr));
console.log(String(fruits));
console.log(Number([]));
console.log([] +1);
console.log(typeof ([1] + 1));
console.log([] == []);

arr = ["I", "go", "home"];

delete arr[1];
console.log(arr);
arr = ["I", "study", "JavaScript"];

let fuckedItems = arr.splice(1, 2,"ahmet","osman");
console.log(arr);
console.log(fuckedItems);
fuckedItems = arr.splice(6,0,"ahmet","osman");
console.log(arr);
console.log(fuckedItems);
arr = ["t", "e", "s", "t"];
console.log(arr.slice(1,3));
console.log(arr);
let str = "I got the Power";
console.log(str.slice(2,5));

/// concat
 arr = [1, 2];
///////////// !!!!!!!!!!!!!!!!!!!!!!!!!!!!! /////////////////
let arrayLike = {
  0: "something",
  1: "else",
  2: "what?",
  name: "arr",
  [Symbol.isConcatSpreadable]: true,
  length: 3,
};

console.log( arr.concat(arrayLike) );

////////////
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
  });
console.log(["Bilbo", "Gandalf", "Nazgul"].includes("Bilbo"));

 arr = [NaN];
console.log( arr.indexOf(NaN) ); // -1 (should be 0, but === equality doesn't work for NaN)
console.log( arr.includes(NaN) );// true (correct)
 let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  let user = users.find(item => item.id == 1);
  
  console.log(user); // John
  user =  users.filter(item => item.id <= 2);
  console.log(user);

  let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
  console.log(lengths);
  console.log( 
["Bilbo", "Gandalf", "Nazgul"]
  .map(item => item + "JS")
  .filter(item => item.startsWith("G") )

  )
  console.log([11,2,22,1].sort((a, b) => a - b));

  console.clear();
  arr = ['Bilbo', 'Gandalf', 'Nazgul'];
  let strJoin = arr.join(';');
  console.log(strJoin);

  /// reduce 
  /*
  let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);
*/
  arr = [1, 2, 3, 4, 5];
  let result = arr.reduce((sum, current) => sum + current,-10);
  console.log(result);
  arr = [];
  result = arr.reduce((sum, current) => sum + current,0); // if the array is empty it needs initial value
  console.log(result);

console.log(typeof []);
console.log(Array.isArray([]));

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

let usersSolders = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];

// find users, for who army.canJoin returns true
let soldiers = usersSolders.filter(army.canJoin, army);
// let soldiers = userSolders.filter( user => army.canJoin(user));

console.log(soldiers.length); // 2
console.log(soldiers[0].age); // 20
console.log(soldiers[1].age); // 23

let arrLike = {
  0: "Hello",
  1: "World",
  length: 2
};
 arr = Array.from(arrLike);
 console.log(arr);
 
 str = 'abc';

let chars = []; // Array.from internally does the same loop
for (let char of str) {
  chars.push(char);
}
console.log(chars);

