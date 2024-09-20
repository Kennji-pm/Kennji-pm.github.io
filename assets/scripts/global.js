window.addEventListener("scroll", function () {
  var header = this.document.querySelector("nav");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});
