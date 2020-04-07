// eslint-disable-next-line import/extensions
import keys from './keys.js';

const divWrapper = document.createElement('div');
divWrapper.classList.add('wrapper');
document.querySelector('body').appendChild(divWrapper);

const textarea = document.createElement('textarea');
divWrapper.appendChild(textarea);
textarea.disabled = true;
const cursor = '|';
textarea.value = cursor;

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
divWrapper.appendChild(keyboard);

localStorage.setItem('lang', 'en');

function createButton(n, rule) {
  const btn = document.createElement('div');
  btn.classList.add(n.class);
  btn.dataset.code = n.code;
  let reg;
  switch (rule) {
    case 'ruL': { reg = `${n.ru[0]}`; break; }
    case 'ruU': { reg = `${n.ru[1]}`; break; }
    case 'enL': { reg = `${n.en[0]}`; break; }
    case 'enU': { reg = `${n.en[1]}`; break; }
    default: console.log('error');
  }
  btn.innerText = reg;
  const storedRule = localStorage.getItem('lang');
  if ((storedRule === rule.slice(0, 2) && rule.slice(-1) === 'L') || (storedRule === 'null' && rule === 'ruL')) {
    btn.classList.add('active');
  } else {
    btn.classList.add('hidden');
  }
  return btn;
}

keys.forEach((row) => {
  const keyboardRow = document.createElement('div');
  keyboard.appendChild(keyboardRow);
  keyboardRow.classList.add('keyboard__row');
  row.forEach((n) => {
    keyboardRow.appendChild(createButton(n, 'ruL'));
    keyboardRow.appendChild(createButton(n, 'ruU'));
    keyboardRow.appendChild(createButton(n, 'enL'));
    keyboardRow.appendChild(createButton(n, 'enU'));
  });
});

const capt = document.createElement('div');
capt.classList.add('caption');
capt.innerText = 'Win10, смена языков - Shift+Alt';
divWrapper.appendChild(capt);

let shiftPressed = false;

function textareaAdd(char) {
  let val = textarea.value;
  const index = val.indexOf(cursor);
  const arrows = ['▲', '◄', '▼', '►'];
  function insert(c) {
    return val.slice(0, index) + c + val.slice(index);
  }
  if (char.length === 1 && !arrows.includes(char)) {
    val = insert(char);
  }
  if (char.length === 0) {
    val = insert(' ');
  }
  if (char === 'Enter') {
    val = insert('\n');
  }
  if (char === 'Tab') {
    val = insert('\t');
  }
  if (char === 'Backspace') {
    val = val.slice(0, index - 1) + val.slice(index);
  }
  if (char === '◄' || char === 'ArrowLeft') {
    val = val.replace(cursor, '');
    val = val.slice(0, index - 1) + cursor + val.slice(index - 1);
  }
  if (char === '►' || char === 'ArrowRight') {
    val = val.replace(cursor, '');
    val = val.slice(0, index + 1) + cursor + val.slice(index + 1);
  }
  if (char === '▲' || char === 'ArrowUp') {
    const strEnd = val.slice(index + 1);
    const str = val.slice(0, index);
    val = val.replace(cursor, '');
    val = str.slice(0, str.lastIndexOf('\n')) + cursor + str.slice(str.lastIndexOf('\n')) + strEnd;
  }
  if (char === '▼' || char === 'ArrowDown') {
    const strEnd = val.slice(0, index);
    const str = val.slice(index + 1);
    val = strEnd + str.slice(0, str.indexOf('\n') + 1) + cursor + str.slice(str.indexOf('\n') + 1);
  }
  textarea.value = val;
}

function inputShift(e) {
  let code;
  let elem;
  if (e.type === 'click') code = e.target.dataset.code;
  else code = e.code;
  keys.find(() => {
    keys.forEach((row) => {
      row.forEach((n) => {
        if (Object.values(n).includes(code)) { elem = n; return elem; }
      });
    });
    return elem;
  });
  let char;
  if (localStorage.getItem('lang') === 'ru' || localStorage.getItem('lang') === 'null') {
    char = elem.ru[1];
  } else char = elem.en[1];
  textareaAdd(char);
  if (char === 'ControlLeft') {
    switch (localStorage.lang) {
      case 'ru': {
        localStorage.setItem('lang', 'en');
        document.querySelectorAll('.keyboard__key.active').forEach((el) => {
          el.classList.toggle('hidden');
          el.previousSibling.toggle('hidden');
        });
        break;
      }
      case 'en': localStorage.setItem('lang', 'ru'); break;
      default: console.log('error'); break;
    }
  }
}

function shift() {
  document.addEventListener('keydown', (e) => {
    if ((e.type === 'keydown' && e.key.slice(0, 5) === 'Shift')
    || (e.type === '' && e.target.innerText === 'Shift')) {
      if (!shiftPressed) shiftPressed = true;
      else shiftPressed = false;
    }
  });

  document.addEventListener('keydown', (event) => {
    inputShift(event);
  });
}

function input(e) {
  let character;
  if (e.type === 'keydown') character = e.key;
  else character = e.target.innerText;
  textareaAdd(character);
}

document.addEventListener('keydown', (event) => {
  if (!shiftPressed) input(event);
  else shift(event);
});

keyboard.addEventListener('click', (event) => {
  if (event.target.classList.contains('active')) {
    if (!shiftPressed) input(event);
    else shift(event);
  }
});
