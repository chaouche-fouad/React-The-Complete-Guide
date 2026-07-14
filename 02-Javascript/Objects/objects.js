const user = {
  name: "John",
  age: 30,
  email: "john@example.com",
  city: "New York",
  country: "USA",
  isAdmin: true,
  isActive: true,
  isLoggedIn: true,
  isGuest: false,
  isMember: true,
  isPremium: true,
  getUserInfo() {
    return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}, City: ${this.city}, Country: ${this.country}`;
  },
};

console.log(user.getUserInfo());

class User {
  constructor(name, age, email, city, country) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.city = city;
    this.country = country;
  }
}

const user2 = new User("John", 30, "john@example.com", "New York", "USA");
console.log(user2);
