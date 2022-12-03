const user = {
  name: "Test",
  age: 15,
};

for (let key in user) {
  console.log(key);
}
const arr = [1, 2, 3, 4];
for (let key in arr) {
  console.log(key);
}

function User1(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

User1.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const user1 = new User1("Test", "Testowich", 25, true, "one@gmail.com", true);
console.log("user1 :>> ", user1);

for (let key in user1) {
  console.log(key);
}

for (let key in user1) {
  if (user1.hasOwnProperty(key)) {
    console.log("keyown :>> ", key);
  }
}
Object.keys(user).forEach((key) => console.log("user[key] :>> ", user[key]));
Object.keys(user1).forEach((key) => console.log("user[key] :>> ", user1[key]));
