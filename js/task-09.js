const refs = {
  bodyEl: document.body,
  buttonEl: document.querySelector('.change-color'),
  colorValue: document.querySelector('.color'),
};

refs.buttonEl.addEventListener('click', onButtonClick);

function onButtonClick(event) {
  inputBodyBackgroundColor();
  inputColorValue();
}

function inputBodyBackgroundColor() {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
}

function inputColorValue() {
  refs.colorValue.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
