const h1 = document.querySelector("h1");
const p = document.querySelector("p");

h1.addEventListener("click", () => {
  h1.style.color = "red";
});
p.addEventListener("click", () => {
  p.style.color = "blue";
});
