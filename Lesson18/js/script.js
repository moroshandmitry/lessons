// Objects
const user = {
  name: "John",
  age: 30,
  "liked birds": true,
};
// user.likes birds = true; // error
user["likes birds"] = true;

const anotherUser = { name: "Bob" };
const admin = anotherUser; // copy link
//console.log(admin.name);

// Object
const person = {
  name: "Dmitry",
  email: "moroshandmitry@gmail.com",
  getName: function () {
    return this.name;
  },
};

console.log(person.getName());

const attribute = "name";
if (attribute in person) {
  console.log("Yes");
} else {
  console.log("No");
}

console.log("name" in person); // true
console.log("age" in person); // false

// Clone object 1 - for in
const clone = {};
for (const key in person) {
  clone[key] = person[key];
}

clone.name = "Dmitry clone";

for (const key in person) {
  console.log(person[key]);
}

for (const key in person) {
  console.log(clone[key]);
}

// delete person.name
delete person.name;

// Clone object 2 - Object.assign();
const cloned = Object.assign({}, person);
console.log(cloned); // {name: "Dmitry", email: "moroshandmitry@gmail.com"}

console.log(`name ${person.name} email ${person.email}`);
console.log(`name ${person["name"]} email ${person["email"]}`);

let attr = "name";
attr = "email";
console.log(person[attr]); // moroshandmitry@gmail.com

// Clone object 3 - stringify(object as string), parse(string in object)
const str = JSON.stringify(person);
const cloneObj = JSON.parse(str);
console.log(str); // as string {"name":"Dmitry","email":"moroshandmitry@gmail.com"}
console.log(person); // object {name: "Dmitry", email: "moroshandmitry@gmail.com"}
console.log(cloneObj); // cloneObj {name: "Dmitry", email: "moroshandmitry@gmail.com"}

const skill = {
  name: "html",
  level: 5,
  getName: function () {
    return `${this.name} ${this.level}`;
  },
};
console.log(`${skill.getName()}`);

// Constructor
function Person(name, email) {
  this.name = name;
  this.email = "";
  this.getInfo = function () {
    return `${this.name} ${this.email}`;
  };
}

const newUser = new Person("Dmitry", "moroshandmitry@gmail.com");
const newAdmin = new Person("Alex", "alex@gmail.com");

console.log(newUser.__proto__);
console.log(newAdmin.__proto__);
