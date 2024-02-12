// Створюємо форму
document.body.innerHTML = `
  <form id="form">
    <label>Ім'я: <input type="text" id="name"></label> <br>
    <label>Вік: <input type="number" id="age"></label> <br> 
    <label>Днів зберігання: <input type="number" id="days"></label> <br>
    <button type="submit">Зберегти</button>
  </form>
`;

// Обробка події submit форми
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Отримуємо дані з форми
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const days = document.getElementById('days').value;  

  // Встановлюємо куки
  document.cookie = `name=${name}; max-age=${days * 24 * 60 * 60}`;
  document.cookie = `age=${age}; max-age=${days * 24 * 60 * 60}`;

  // Виводимо вміст кук
  document.write(`name: ${document.cookie.split('; ').find(row => row.startsWith('name=')).split('=')[1]}<br>`);
  document.write(`age: ${document.cookie.split('; ').find(row => row.startsWith('age=')).split('=')[1]}<br>`);
});