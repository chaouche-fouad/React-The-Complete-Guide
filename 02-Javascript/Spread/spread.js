const hobbies = ["Sports", "Cooking", "Reading"];
const newHobbies = [...hobbies, "Programming"];
console.log(newHobbies);

const user = {
  name: "John",
  age: 30,
  email: "john@example.com",
  city: "New York",
  country: "USA",
};
const newUser = { ...user, hobbies: [...hobbies, "Programming"] };
console.log(newUser);
