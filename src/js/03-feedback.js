import throttle from 'lodash.throttle';


const refs = {
  form: document.querySelector('.feedback-form'),
//   input: document.querySelector('input'),
// textarea: document.querySelector('textarea'),
};

// console.log(refs);

const KEY_STRING = 'feedback-form-state';

// try {
//   try_statements
// }
// [catch (exception_var_1 if condition_1) { // не стандартно
//   catch_statements_1
// }]
// ...
// [catch (exception_var_2) {
//   catch_statements_2
// }]
// [finally {
//   finally_statements
// }]

const saveData = () => {
  try {
    const storedForm = JSON.parse(localStorage.getItem(KEY_STRING));
    refs.form.email.value = storedForm.email;
    refs.form.message.value = storedForm.message;
  }
  catch {
    console.log('Чекаємо, поки користувач заповнить поля...')
  }
};

saveData();

const inputUpdate = (event) => {
  const {
    elements: { email, message },
  } = refs.form;

  localStorage.setItem(KEY_STRING, JSON.stringify({ email: email.value, message: message.value }));
};

refs.form.addEventListener('input', throttle(inputUpdate, 500));

const formSubmit = event => {
  event.preventDefault();

  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value == '' || message.value == '') return alert('Будь ласка, заповніть всі поля форми!');

  const data = new FormData(event.currentTarget);
  console.log(Object.fromEntries(data.entries()));

  localStorage.removeItem(KEY_STRING);
  event.currentTarget.reset();
};

refs.form.addEventListener('submit', formSubmit);


// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с 
// полями email и password, в которых сохраняй текущие значения полей формы. Пусть ключом для
// хранилища будет строка "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, 
// заполняй ими поля формы. В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, 
// password и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь 
// в проект и используй библиотеку lodash.throttle.