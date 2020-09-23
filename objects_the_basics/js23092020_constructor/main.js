
function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");
let userahmet = new User("");
console.log(user);
console.log(userahmet);

function sayHi(name){
    this.name = name;
    console.log(this.name);
}
new sayHi("ahmet");
new sayHi("osman");

function Animal(name) {
    if (!new.target) { // if you run me without new
        return new Animal(name); // ...I will add new for you
      }
    
      this.name = name;

}
let animal = Animal("Dog");
let animal1 = new Animal("Cat");
console.log(animal);
console.log(animal1);
function SmallUser() {

    this.name = "John";
  
    return; // <-- returns this
  }
  console.log(new SmallUser())


  function serverUsers(name,admin) {
    this.name = name;
    this.admin = admin;
    this.isAdmin = function() {
      if(this.admin) return true;
      return false;
    };
  }
  
  let sysapp = new serverUsers("ahmet",false);
  let sysadmn = new serverUsers("osman",true);
  console.log(sysadmn.isAdmin());
  console.log(sysapp.isAdmin());
