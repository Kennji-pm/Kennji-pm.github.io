window.addEventListener("scroll", function () {
  var header = this.document.querySelector("nav");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  document.querySelector(".navbar").classList.toggle("active");
});

playJava = document.getElementById("playJava");
playBedrock = document.getElementById("playBedrock");

playBedrock.addEventListener("click", function () {
  window.location.href =
    "minecraft://?addExternalServer=NightfallAssault - Network|play.nightfallassault.net:19132";
});
playJava.addEventListener("click", function () {
  navigator.clipboard.writeText("play.nightfallassault.net");
  playJava.textContent = "Copied to your clipboard.";
});

var modal = document.getElementById("selectPlatformModal");
var btn = document.getElementById("playBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    window.location.href =
      "minecraft://?addExternalServer=NightfallAssault - Network|play.nightfallassault.net:19132";
  } else {
    modal.style.display = "block";
  }
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
