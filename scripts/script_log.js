document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Останавливаем отправку формы

  let login = document.getElementById('login').value;
  let password = document.getElementById('password').value;

  let Tlogin = localStorage.getItem('SavedLogin');
  let Tpassword = localStorage.getItem('SavedPass');

  if(login == Tlogin && password == Tpassword ){
    window.location.href = '/pages/Profile.html';
  }
  else{
    alert("Неверный логин или пароль")
  }


});