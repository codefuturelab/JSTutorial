// object to primitive conversion 
console.clear();
let user1 = {
    name: "John",
    money: 1000,
    [Symbol.toPrimitive](hint) {
        console.log(`hint : ${hint}`);
        return hint == "string" ? `{name : "${this.name}"}` : this.money;
    }
}
console.log(user1 + 1);
console.log(++user1);

console.log(`user1 ${user1}`);

let user2 = {
    name: "John",
    money: 1000,
    toString () {
        return `{name : "${this.name},money="${this.money}"}`;
    },
    valueOf() {
        return this.money;
    }
}
console.clear();
console.log(user2.valueOf() === user2);

console.log(user2.toString());
console.log(user2 + 2);

let obj = {
    toString() {
      return "2";
    }
  };
  console.log(typeof (obj+1));
  console.log(obj.toString()+5);

