window.addEventListener("scroll", function () {
  var header = this.document.querySelector("nav");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  document.querySelector(".navbar").classList.toggle("active");
});

// play_btn = document.querySelector(".play-btn");

// play_btn.addEventListener("click", function () {
//   window.location.href =
//     "minecraft://?addExternalServer=NightfallAssault - Network|animeisekai.com:19132";
// });

var modal = document.getElementById("selectPlatformModal");
var btn = document.getElementById("playBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
