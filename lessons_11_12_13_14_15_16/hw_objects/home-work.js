// 1. Створити об'єкт customer, що містить такі властивості:
// -ім'я,
// -прізвище,
// -електронна адреса,
// -password,
// -номер телефона,
// -адреса (є рядком або *об'єктом з властивостями місто, вулиця, дім, квартира) ;
// методи:
// -виведення адреси,
const customer = {
  firstName: "Test",
  lastName: "Test",
  email: "test@gmail.com",
  password: 1234,
  phoneNumber: 5555555,
  location: {
    city: "Zaporizhia",
    street: "prospekt Soborny",
    home: 147,
    apartment: NaN,
  },
};
console.log("customer", customer);
console.log("customer.location", customer.location);
// -зміна номера телефону (метод повинен приймати як параметр рядок з новим номером телефону).
customer.phoneNumber = "+380665555555";
// Додати об'єкту властивість isMale (для позначення статі, true - male, false - female).
customer.isMale = true;
// Видалити у об'єкта властивість адреса.
delete customer.location;
// Зробити копії об'єкту customer двома різними способами.
const copyOfCustromer = { ...customer };
console.log("copyOfCustomer", copyOfCustromer);
const secondCopyOfCustomer = Object.assign({}, customer);
console.log("secondCopyOfCustomer", secondCopyOfCustomer);

// 2. Перебрати і вивести властивості об'єкту cat
// {
//     name: 'Murka',
//     color: 'black',
//     isMale: false,
//     isFurnitureDemage: true,

// }
// циклом for..in.
const cat = {
  name: "Murka",
  color: "black",
  isMale: false,
  isFurnitureDemage: true,
};

for (const key in cat) {
  console.log(`${key}:${cat[key]}`);
}

// 3. Створити функцію-конструктор для створення об'єктів книг з властивостями:
// -автор,
// -назва,
// -рік видання,
// -видавництво (рядок або *об'єкт з властивостями місто, назва),
// -ціна.

function Books(author, name, yearOfPublication, publishingHouse, price) {
  this.author = author;
  this.name = name;
  this.yearOfPublication = yearOfPublication;
  this.publishingHouse = publishingHouse;
  this.price = price;
  this.getAge = function () {
    const currentYear = new Date().getFullYear();
    const age = currentYear - yearOfPublication;
    return `The book '${this.name}' was published ${age} years ago`;
  };
  this.changePrice = function (newPrice) {
    this.price = newPrice;
  };
}
const book = new Books(
  "Lee Iacocca",
  "An Autobiography",
  1986,
  "64 Hallfield Rd, Tang Hall, York YO31 7ZQ",
  4.56
);
console.log(book);
// Передбачити методи:
// для обчислення віку книги (у роках),
console.log(book.getAge());
// для зміни ціни книги.
book.changePrice(0.98);
console.log(book);
