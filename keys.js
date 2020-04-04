const keys = [
  [{
    ru: ['ё', 'Ё'], en: ['`', '~'], class: 'keyboard__key', code: 'Backqoute',
  },
  {
    ru: ['1', '!'], en: ['1', '!'], class: 'keyboard__key', code: 'Digit1',
  },
  {
    ru: ['2', '"'], en: ['2', '@'], class: 'keyboard__key', code: 'Digit2',
  },
  {
    ru: ['3', '№'], en: ['3', '#'], class: 'keyboard__key', code: 'Digit3',
  },
  {
    ru: ['4', ';'], en: ['4', '$'], class: 'keyboard__key', code: 'Digit4',
  },
  {
    ru: ['5', '%'], en: ['5', '%'], class: 'keyboard__key', code: 'Digit5',
  },
  {
    ru: ['6', ':'], en: ['6', '^'], class: 'keyboard__key', code: 'Digit6',
  },
  {
    ru: ['7', '?'], en: ['7', '&'], class: 'keyboard__key', code: 'Digit7',
  },
  {
    ru: ['8', '*'], en: ['8', '*'], class: 'keyboard__key', code: 'Digit8',
  },
  {
    ru: ['9', '('], en: ['9', '('], class: 'keyboard__key', code: 'Digit9',
  },
  {
    ru: ['0', '*'], en: ['0', '*'], class: 'keyboard__key', code: 'Digit0',
  },
  {
    ru: ['-', '_'], en: ['-', '_'], class: 'keyboard__key', code: 'Minus',
  },
  {
    ru: ['=', '+'], en: ['=', '+'], class: 'keyboard__key', code: 'Equal',
  },
  {
    ru: ['Backspace', 'Backspace'], en: ['Backspace', 'Backspace'], class: 'keyboard__key-wide', code: 'Backspace',
  }],
  [{
    ru: ['Tab', 'Tab'], en: ['Tab', 'Tab'], class: 'keyboard__key-wide', code: 'Tab',
  },
  {
    ru: ['й', 'Й'], en: ['q', 'Q'], class: 'keyboard__key', code: 'KeyQ',
  },
  {
    ru: ['ц', 'Ц'], en: ['w', 'W'], class: 'keyboard__key', code: 'KeyW',
  },
  {
    ru: ['у', 'У'], en: ['e', 'E'], class: 'keyboard__key', code: 'KeyE',
  },
  {
    ru: ['к', 'К'], en: ['r', 'R'], class: 'keyboard__key', code: 'KeyE',
  },
  {
    ru: ['е', 'Е'], en: ['t', 'T'], class: 'keyboard__key', code: 'KeyT',
  },
  {
    ru: ['н', 'Н'], en: ['y', 'Y'], class: 'keyboard__key', code: 'KeyY',
  },
  {
    ru: ['г', 'Г'], en: ['u', 'U'], class: 'keyboard__key', code: 'KeyU',
  },
  {
    ru: ['ш', 'Ш'], en: ['i', 'I'], class: 'keyboard__key', code: 'KeyI',
  },
  {
    ru: ['щ', 'Щ'], en: ['o', 'O'], class: 'keyboard__key', code: 'KeyO',
  },
  {
    ru: ['з', 'З'], en: ['p', 'P'], class: 'keyboard__key', code: 'KeyP',
  },
  {
    ru: ['х', 'Х'], en: ['[', '{'], class: 'keyboard__key', code: 'BracketLeft',
  },
  {
    ru: ['ъ', 'Ъ'], en: [']', '}'], class: 'keyboard__key', code: 'BracketRight',
  },
  {
    ru: ['\\', '/'], en: ['\\', '|'], class: 'keyboard__key', code: 'Backlash',
  },
  {
    ru: ['\\', '/'], en: ['\\', '|'], class: 'keyboard__key', code: 'Backlash',
  }],
  [{
    ru: ['CapsLock', 'CapsLock'], en: ['CapsLock', 'CapsLock'], class: 'keyboard__key-wide', code: 'CapsLock',
  },
  {
    ru: ['ф', 'Ф'], en: ['a', 'A'], class: 'keyboard__key', code: 'KeyA',
  },
  {
    ru: ['ы', 'Ы'], en: ['s', 'S'], class: 'keyboard__key', code: 'KeyS',
  },
  {
    ru: ['в', 'В'], en: ['d', 'D'], class: 'keyboard__key', code: 'KeyD',
  },
  {
    ru: ['а', 'А'], en: ['f', 'F'], class: 'keyboard__key', code: 'KeyF',
  },
  {
    ru: ['п', 'П'], en: ['g', 'G'], class: 'keyboard__key', code: 'KeyG',
  },
  {
    ru: ['р', 'Р'], en: ['h', 'H'], class: 'keyboard__key', code: 'KeyH',
  },
  {
    ru: ['о', 'О'], en: ['j', 'J'], class: 'keyboard__key', code: 'KeyJ',
  },
  {
    ru: ['л', 'Л'], en: ['k', 'K'], class: 'keyboard__key', code: 'KeyK',
  },
  {
    ru: ['д', 'Д'], en: ['l', 'L'], class: 'keyboard__key', code: 'KeyL',
  },
  {
    ru: ['ж', 'Ж'], en: [';', ':'], class: 'keyboard__key', code: 'Semicolon',
  },
  {
    ru: ['э', 'Э'], en: ['\'', '"'], class: 'keyboard__key', code: 'Quote',
  },
  {
    ru: ['Enter', 'Enter'], en: ['Enter', 'Enter'], class: 'keyboard__key-wide', code: 'Enter',
  }],
  [{
    ru: ['Shift', 'Shift'], en: ['Shift', 'Shift'], class: 'keyboard__key-wide', code: 'ShiftLeft',
  },
  {
    ru: ['я', 'Я'], en: ['z', 'Z'], class: 'keyboard__key', code: 'KeyZ',
  },
  {
    ru: ['ч', 'Ч'], en: ['x', 'X'], class: 'keyboard__key', code: 'KeyX',
  },
  {
    ru: ['с', 'С'], en: ['c', 'C'], class: 'keyboard__key', code: 'KeyC',
  },
  {
    ru: ['м', 'М'], en: ['v', 'V'], class: 'keyboard__key', code: 'KeyV',
  },
  {
    ru: ['и', 'И'], en: ['b', 'B'], class: 'keyboard__key', code: 'KeyB',
  },
  {
    ru: ['т', 'Т'], en: ['n', 'N'], class: 'keyboard__key', code: 'KeyN',
  },
  {
    ru: ['ь', 'Ь'], en: ['m', 'M'], class: 'keyboard__key', code: 'KeyM',
  },
  {
    ru: ['б', 'Б'], en: [',', '<'], class: 'keyboard__key', code: 'Comma',
  },
  {
    ru: ['ю', 'Ю'], en: ['.', '>'], class: 'keyboard__key', code: 'Period',
  },
  {
    ru: ['.', ','], en: ['/', '?'], class: 'keyboard__key', code: 'Slash',
  },
  {
    ru: ['▲', '▲'], en: ['▲', '▲'], class: 'keyboard__key', code: 'ArrowUp',
  },
  {
    ru: ['Shift', 'Shift'], en: ['Shift', 'Shift'], class: 'keyboard__key-wide', code: 'ShiftRight',
  }],
  [{
    ru: ['Ctrl', 'Ctrl'], en: ['Ctrl', 'Ctrl'], class: 'keyboard__key', code: 'ControlLeft',
  },
  {
    ru: ['Win', 'Win'], en: ['Win', 'Win'], class: 'keyboard__key', code: 'MetaLeft',
  },
  {
    ru: ['Alt', 'Alt'], en: ['Alt', 'Alt'], class: 'keyboard__key', code: 'AltLeft',
  },
  {
    ru: ['', ''], en: ['', ''], class: 'keyboard__key-space', code: 'Space',
  },
  {
    ru: ['Alt', 'Alt'], en: ['Alt', 'Alt'], class: 'keyboard__key', code: 'AltRight',
  },
  {
    ru: ['◄', '◄'], en: ['◄', '◄'], class: 'keyboard__key', code: 'ArrowLeft',
  },
  {
    ru: ['▼', '▼'], en: ['▼', '▼'], class: 'keyboard__key', code: 'ArrowDown',
  },
  {
    ru: ['►', '►'], en: ['►', '►'], class: 'keyboard__key', code: 'ArrowRight',
  },
  {
    ru: ['Ctrl', 'Ctrl'], en: ['Ctrl', 'Ctrl'], class: 'keyboard__key', code: 'ControlRight',
  }],
];

export default keys;
