function App() {
  const root = document.getElementById('root');
  const heading = document.createElement('h1');
  const paragraph = document.createElement('p');
  const button = document.createElement('button');
  let count = 0;

  // Функция для обновления счетчика и текста абзаца
  function handleClick() {
    count++;
    paragraph.textContent = `Вы нажали ${count} раз`;
  }

  heading.textContent = 'Пример Одностраничного Приложения';
  paragraph.textContent = `Вы нажали ${count} раз`;
  button.textContent = 'Нажми на меня';
  button.addEventListener('click', handleClick);

  root.appendChild(heading);
  root.appendChild(paragraph);
  root.appendChild(button);
}

App(); // Запускаем функцию App
