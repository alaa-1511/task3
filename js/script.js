const icon = document.querySelector(".header .links .icon");
const list = document.querySelector(".header .links .list");
const closeBtn = document.querySelector(".header .links .close-btn");

icon.addEventListener("click", function () {
  list.classList.add("active");
});
closeBtn.addEventListener("click", function () {
  list.classList.remove("active");
});
