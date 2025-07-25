function generatePassword() {
  var length = document.getElementById('password-length').value;
  var includeUppercase = document.getElementById('include-uppercase').checked;
  var includeLowercase = document.getElementById('include-lowercase').checked;
  var includeNumbers = document.getElementById('include-numbers').checked;
  var includeSymbols = document.getElementById('include-symbols').checked;

  var charset = '';
  if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
  if (includeNumbers) charset += '0123456789';
  if (includeSymbols) charset += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

  var password = '';
  for (var i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  var passwordStrength = getPasswordStrength(password);

  document.getElementById('generated-password').innerText = password;
  document.getElementById('password-strength').innerText = "Уровень надёжности пароля: " + passwordStrength;

}
function getPasswordStrength(password) {
  var passwordLength = password.length;
  var hasUppercase = /[A-Z]/.test(password);
  var hasLowercase = /[a-z]/.test(password);
  var hasNumbers = /\d/.test(password);
  var hasSymbols = /[^A-Za-z0-9]/.test(password);

  var strength = 0;

  if (hasUppercase) {
    strength++;
  }
  if (hasLowercase) {
    strength++;
  }

  if (hasNumbers) {
    strength++;
  }

  if (hasSymbols) {
    strength++;
  }
  strength *= (passwordLength / 10);

  if (strength == 1) {
    return "Простой";
  } else if (strength >= 2 && strength < 4) {
    return "Средний";
  } else if (strength >= 4) {
    return "Сложный";
  } else {
    return "Простой";
  }
}
document.getElementById('password-length').addEventListener('input', function() {
  var passwordLength = this.value;
  document.getElementById('password-length-output').innerText = passwordLength;
});