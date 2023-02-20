/**
 *  1. Элементы:
 *    * формы
 *    * submitBtn
 *    * эл input [email,userName,password]
 *
 *  2. Создаем объект нового пользователя.
 *
 *  3. подписываемся на собитие полей формы
 *    КБ
 *    * присваиваем значения с формы => newUser
 *    * проверяем валидацию
 *    * снимаем Атрибут disabled с кнопки submit => при успешной валидации!
 *
 *  4. Подписываемся на событие Submit
 *    КБ
 *    * Cбрасываем Дефолдное поведение браузера
 *    *  POST New User =>  API
 *    *  GET  this user  => Alert
 *    *  Form reset
 */

const baseUrl = 'https://638a2fb34eccb986e8a68dd4.mockapi.io/api/v1/usersform';

const loginForm = document.querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');

const [emailFormInput, userNameFormInput, passwordFormInput] =
  document.querySelectorAll('.form-input');

const newUser = {
  email: null,
  name: null,
  password: null,
};

const filledInputForm = event => {
  const emailText = emailFormInput.value;
  newUser.email = emailText;

  const userText = userNameFormInput.value;
  newUser.name = userText;

  const passwordText = passwordFormInput.value;
  newUser.password = passwordText;

  const filledForm = loginForm.reportValidity(event.target.value);

  if (filledForm) submitBtn.removeAttribute('disabled');
};

loginForm.addEventListener('input', filledInputForm);

function getUsers() {
  return fetch(baseUrl).then(response => response.json());
}

function getUserById(userId) {
  return fetch(`${baseUrl}/${userId}`).then(response => response.json());
}

const createUser = newUser =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(newUser),
  });

const submitCreatedUser = event => {
  event.preventDefault();

  createUser(newUser)
    .then(() => getUsers())
    .then(user => {
      getUserById(user.length).then(users => alert(JSON.stringify(users)));
    })
    .then(() => {
      loginForm.reset();
    });
};

loginForm.addEventListener('submit', submitCreatedUser);
