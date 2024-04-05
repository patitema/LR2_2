document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Останавливаем отправку формы

  var login = document.getElementById('login').value;
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var password = document.getElementById('password').value;

  localStorage.setItem('SavedLogin', login);
  localStorage.setItem('SavedName', name);
  localStorage.setItem('SavedEmail', email);
  localStorage.setItem('SavedPhone', phone);
  localStorage.setItem('SavedPass', password);

  window.location.href = '/pages/Profile.html';

});
