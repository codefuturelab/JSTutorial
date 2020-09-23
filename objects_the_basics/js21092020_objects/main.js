console.log("ahmet");
console.clear();
let a = {};
let b = {};
let c = b; // copy the reference of b to the c 
console.log(a == b);  //false
console.log(a === b); // false

console.log(c == b); // true
console.log(c === b); // true
// deepCopy 
let user = {
	name :"Muslum",
	age: 20
};

let clone = {};

for ( let key in user) {
	clone[key] = user[key];
}

//clone.name = "ahmet";
//user.name = "Jhon";

console.log("clone = \n" + JSON.stringify(clone));
console.log("user = \n" + JSON.stringify(user));

let deepCopy = (obj) => {
	return Object.assign({}, user);
}

user.skill = {softskill: "music", hardskill:"sport"};
console.log(user.skill.softskill);
console.log(deepCopy(user));


let copy = Object.assign({},user);
console.log(copy);
console.log(user.skill === copy.skill);
user.skill.softskill = "art";
console.log(copy);
console.clear();

let admin = user;
user = null; 
console.log(user) 
console.log(admin);
admin = null;
console.log(admin);
console.clear();


let st = {
	name: "John",
	age: 30,
	deathYear:1990,
	getAge:() => console.log(st.age),
	getName() {
		console.log(this.name);
	},

  };
 
st.getUserInfo = () => console.log(st.name + " is " + st.age +" years old");
st.getDeathYear = function () {
	console.log(this.deathYear);
}

console.log(st);
st.getUserInfo();
st.getAge();
st.getName();
st.getDeathYear();

console.clear();

let adminSt = st;

st = null;
console.log(adminSt);
///st.getAge(); // error !!!
adminSt.getName(); // with this OK
console.clear();

let manager = { name: "John" };
let worker = { name: "Admin" };

function sayHi() {
	console.log(this);
	console.log( this.name );
  }
manager.f = sayHi;
worker.f = sayHi;
manager.f();
worker.f();  

/*
let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
}; */



function makeUser() {
	return {
	  name: "John",
	  ref() {
		return this;
	  }
	};
  }
  
  let jhon = makeUser();
  
  console.log( jhon.ref().name ); 


