var modal = document.getElementById("hii");
var btn = document.getElementById("Btn");
var span = document.getElementById("close");

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
  modal.style.display = "none";
  }
});