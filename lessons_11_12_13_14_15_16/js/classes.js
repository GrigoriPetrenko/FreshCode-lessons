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

class User {
  constructor(name, surname, age, isMale, email, isSubscribed) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isSubscribed = isSubscribed;
  }
  //   setAge(value) {
  //     this.age = value;
  //   }
  set age(value) {
    if (typeof value !== "number") {
      throw new TypeError("age must be number");
    }
    if (value < 0 || value > 150 || !Number.isInteger(value)) {
      throw new RangeError("age must be less the 130");
    }
    this._age = value;
  }
  get age() {
    return this._age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  static isUser(obj) {
    return obj instanceof User;
  }
}
try {
  const user1 = new User("Test", "Testowich", 25, true, "one@gmail.com", true);
  console.log("user1 :>> ", user1);
  console.log("user1.getFullName() :>> ", user1.getFullName());
  console.log("user1.isUser(user1) :>> ", User.isUser({}));
  // user1.setAge(2);
  // console.log("user1 :>> ", user1);
  user1.age = 26;
  console.log("user1 :>> ", user1);
} catch (error) {
  console.log("error :>> ", error);
}

// // реализовать класс для телефонов (марка, модель, цвет, цена, год выпуска)
// // реализовать метод для расчета возраста телефона
// // создать экземпляр класса, вызвать для него метод

class CellPhone {
  constructor(brend, model, color, price, yearOfProduction) {
    this.brend = brend;
    this.model = model;
    this.color = color;
    this.price = price;
    this.yearOfProduction = yearOfProduction;
  }
  countAge() {
    return new Date().getFullYear() - this.yearOfProduction;
  }
}
const somePhone = new CellPhone("Test", "Testowich", "somecolor", 25, 2022);
console.log("somePhone :>> ", somePhone);
console.log("Age ", somePhone.countAge());
