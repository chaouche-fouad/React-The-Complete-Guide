const [name, age, email, city, country] = [
  "John",
  30,
  "john@example.com",
  "New York",
  "USA",
];
console.log(name, age, email, city, country);

const {
  name: userName,
  age: userAge,
  email: userEmail,
  city: userCity,
  country: userCountry,
} = {
  name: "John",
  age: 30,
  email: "john@example.com",
  city: "New York",
  country: "USA",
};
console.log(userName, userAge, userEmail, userCity, userCountry);
