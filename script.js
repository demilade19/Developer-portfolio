const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navBtn = document.querySelector(".nav-btn");
const main = document.querySelector(".main-feature");
const links = document.querySelectorAll(".nav-link");
const close = document.querySelector(".close");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  navBtn.classList.toggle("active");
});
hamburger.addEventListener("click", () => {
  close.style.display = "block";
  hamburger.style.display = "none";
  main.style.marginTop = "12em";
});
close.addEventListener("click", () => {
  hamburger.style.display = "block";
  close.style.display = "none";
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  navBtn.classList.remove("active");
  main.style.marginTop = "0em";
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navBtn.classList.remove("active");
    close.style.display = "none";
    hamburger.style.display = "block";
    main.style.marginTop = "0em";
  });
});
