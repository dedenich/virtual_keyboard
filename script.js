// eslint-disable-next-line import/extensions
import keys from './keys.js';

const divWrapper = document.createElement('div');
divWrapper.classList.add('wrapper');
document.querySelector('body').appendChild(divWrapper);

const textarea = document.createElement('textarea');
textarea.name = 'text';
textarea.id = 'textarea';
divWrapper.appendChild(textarea);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
divWrapper.appendChild(keyboard);


keys.forEach((row) => {
  const keyboardRow = document.createElement('div');
  keyboard.appendChild(keyboardRow);
  keyboardRow.classList.add('keyboard__row');
  row.forEach((n) => {
    const btn = document.createElement('div');
    btn.classList.add(n.class);
    btn.innerText = `${n.ru[0]}`;
    keyboardRow.appendChild(btn);
    return keyboardRow;
  });
  return keyboardRow;
});
