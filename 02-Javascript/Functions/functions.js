import createGreetingExported from "./util.js";
function createGreeting(name) {
  //   console.log("Hello, " + name + "!");
  return "Hello, " + name + "!";
}

createGreeting("John");
console.log(createGreeting("John"));

console.log(createGreetingExported("John"));
