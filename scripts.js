window.addEventListener("scroll", function() {
  let navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY >10)
})
document.getElementById("burger2").addEventListener("click", function() {
  document.querySelector(".navbar").classList.toggle("open")
})