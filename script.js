// let document = window.document;
var home = document.getElementById("home");
var start = document.getElementById("start");

// start.classList.add("active");
function toggleClass() {
  if (start.classList.contains("active")) {
    home.classList.add("active");
    start.classList.remove("active");
  } else {
    start.classList.add("active");
    home.classList.remove("active");
  }
}
