function encryptText() {
  var originalText = document.getElementById('original-text').value;
  var selectedMethod = document.querySelector('option[name="encryptionMethod"]:checked').value;
  var hash;

  if (selectedMethod === 'md5') {
    hash = CryptoJS.MD5(originalText).toString();
  } else if (selectedMethod === 'sha1') {
    hash = CryptoJS.SHA1(originalText).toString();
  } else if (selectedMethod === 'sha256') {
    hash = CryptoJS.SHA256(originalText).toString();
  } else if (selectedMethod === 'sha512') {
    hash = CryptoJS.SHA512(originalText).toString();
  } else if (selectedMethod === 'aes') {
    hash = CryptoJS.AES.encrypt(originalText, "Безопасность").toString();
  }

  document.getElementById('encryption-result').innerText = selectedMethod.toUpperCase() + ": " + hash;
}