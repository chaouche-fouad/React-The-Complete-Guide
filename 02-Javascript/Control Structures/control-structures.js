const age = 20;
if (age > 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

const hobbies = ["Sports", "Cooking", "Reading"];
for (const hobby of hobbies) {
  console.log(hobby);
}

const user = {
  name: "John",
  age: 30,
  email: "john@example.com",
  city: "New York",
  country: "USA",
};
for (const key in user) {
  console.log(key, user[key]);
}
