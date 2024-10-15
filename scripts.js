let flag = false
window.addEventListener("scroll", function() {
  let navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY >10)
})
document.getElementById("burger2").addEventListener("click",function() {
  document.querySelector(".navbar").classList.toggle("open")
  flag = true
})
const plus = document.getElementById("butplus");
const minus = document.getElementById("butminus");
const mult = document.getElementById("butmult");
const div = document.getElementById("butdiv");
const sinus = document.getElementById("sin");
const cosin = document.getElementById("cos");
const tang = document.getElementById("tg");
const cotan = document.getElementById("ctg");

let first = document.getElementById("first");
let second = document.getElementById("second");
let the = document.getElementById("the");

const result = document.getElementById("result");
const results = document.getElementById("results");

let res = 0;
let val = 0;

function calculus(mark) {
  const num1 = parseFloat(first.value) || 0;
  const num2 = parseFloat(second.value) || 0;
  switch(mark) {
    case "+":
      res = num1 + num2;
      break;
    case "-":
      res = num1 - num2;
      break;
    case "*":
      res = num1 * num2;
    case "/":
      res = num2 !== 0 ? num1 / num2 : "error";
      break;
  }
  result.textContent = res

}
function calcul(mark) {
  const num3 = parseFloat(the.value) || 0;
  num = (num3 * Math.PI) / 180;
  switch(mark) {
    case "sin":
      val = Math.sin(num);
      break;
    case "cos":
      val = Math.cos(num);
      break;
    case "tg":
      val = (num % Math.PI) === (Math.PI/2) ? "error" : Math.tan(num);
      break;
    case "ctg":
      val = (num % Math.PI) === 0 ? "error" : 1/(Math.tan(num))
      break;
  }
  results.textContent = val.toFixed(2)

}
plus.addEventListener("click", (event) => {
  event.preventDefault()
  calculus("+");
});
minus.addEventListener("click", (event) => {
  event.preventDefault()
  calculus("-");
});
mult.addEventListener("click", (event) => {
  event.preventDefault()
  calculus("*");
});
div.addEventListener("click", (event) => {
  event.preventDefault()
  calculus("/");
});
sinus.addEventListener("click", (event) => {
  event.preventDefault()
  calcul("sin")
})
cosin.addEventListener("click", (event) => {
  event.preventDefault()
  calcul("cos")
})
tang.addEventListener("click", (event) => {
  event.preventDefault()
  calcul("tg")
})
cotan.addEventListener("click", (event) => {
  event.preventDefault()
  calcul("ctg")
})