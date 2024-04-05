document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Останавливаем отправку формы

  var login = document.getElementById('login').value;
  var password = document.getElementById('password').value;

  localStorage.setItem('SavedLogin', login);
  localStorage.setItem('SavedPass', password);

  window.location.href = '/pages/Profile.html';

});