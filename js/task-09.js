const refs = {
  bodyEl: document.body,
  buttonEl: document.querySelector('.change-color'),
  colorValue: document.querySelector('.color'),
};

refs.buttonEl.addEventListener('click', onButtonClick);

function onButtonClick(event) {
  const hexColor = getRandomHexColor();
  inputBodyBackgroundColor(hexColor);
  inputColorValue(hexColor);
}

function inputBodyBackgroundColor(color) {
  refs.bodyEl.style.backgroundColor = color;
}

function inputColorValue(color) {
  refs.colorValue.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
