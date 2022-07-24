const refs = {
  inputEL: document.querySelector('#controls input'),
  btnCreate: document.querySelector('#controls button[data-create]'),
  btnDstr: document.querySelector('#controls button[data-destroy]'),
  boxesEL: document.querySelector('#boxes'),
};

//====================События===================

refs.inputEL.addEventListener('blur', onInput);

let numbersBoX = 0;

function onInput(event) {
  numbersBoX = event.currentTarget.value;
  refs.btnCreate.addEventListener('click', onCreate);
  //console.log(numbersBoX);
}

function onCreate(event) {
  refs.inputEL.removeEventListener('blur', onInput);
  refs.btnCreate.removeEventListener('click', onCreate);
  refs.btnDstr.addEventListener('click', onDstr);
  createBoxes(numbersBoX);
  //console.log('отписались от инпута');
}

function onDstr(event) {
  refs.inputEL.addEventListener('blur', onInput);
  refs.boxesEL.innerHTML = '';
  // console.log('подписались  на инпут');
  // console.log('клик удалить');
}

//===================== Class styles===============
class Box {
  constructor({ width, height, backgroundColor }) {
    this.width = width + 'px';
    this.height = height + 'px';
    this.backgroundColor = backgroundColor;
  }
}

//=======================создаем боксы в кол-ве
function createBoxes(amount) {
  //console.log('из функции', amount);
  const styleArray = [];

  for (let i = 0; i < amount; i += 1) {
    const boxes = new Box({
      width: 30 + i * 10,
      height: 30 + i * 10,
      backgroundColor: getRandomHexColor(),
    });
    styleArray.push(boxes);
  }

  const markupBoxEL = style => {
    return style.map(box => {
      const boxEL = document.createElement('div');
      boxEL.id = 'boxes';
      boxEL.style.width = box.width;
      boxEL.style.height = box.height;
      boxEL.style.backgroundColor = box.backgroundColor;

      return boxEL;
    });
  };

  const elements = markupBoxEL(styleArray);

  refs.boxesEL.append(...elements);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
