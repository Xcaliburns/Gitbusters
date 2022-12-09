let toggle = document.querySelector(".toggle");
let body = document.querySelector("body");
console.log("hey");
toggle.addEventListener("click", function () {
  body.classList.toggle("open");
  console.log("hello");
});
