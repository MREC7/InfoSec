document.addEventListener("DOMContentLoaded", function() {
  var cookieWarning = document.getElementById("cookie-warning");
  cookieWarning.style.display = "block";
});

document.getElementById("cookie-ok-btn").addEventListener("click", function() {
  var cookieWarning = document.getElementById("cookie-warning");
  cookieWarning.style.display = "none";
});
