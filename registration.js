document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var users = JSON.parse(localStorage.getItem('users')) || {};

  if (users[username]) {
    showMessage("user-exists");
  } else {
    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));
    showMessage("registration-success");
  }
});

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.getElementById('login-username').value;
  var password = document.getElementById('login-password').value;
  var users = JSON.parse(localStorage.getItem('users')) || {};

  if (users[username] && users[username] === password) {
    showMessage("login-success");
  } else {
    showMessage("wnop");
  }
});
function showMessage(messageId) {
  var message = document.getElementById(messageId);
  message.style.display = "block";

  setTimeout(function() {
    message.style.display = "none";
  }, 3000);
}