document.addEventListener('DOMContentLoaded', function() {
  var savedLogin = localStorage.getItem('SavedLogin');
  var savedName = localStorage.getItem('SavedName');
  var savedEmail = localStorage.getItem('SavedEmail');
  var savedPhone = localStorage.getItem('SavedPhone');
  var savedPassword = localStorage.getItem('SavedPass');

  document.getElementById('login').value = savedLogin;
  document.getElementById('name').value = savedName;
  document.getElementById('email').value = savedEmail;
  document.getElementById('phone').value = parseFloat(savedPhone);
  document.getElementById('password').value = savedPassword;

});
