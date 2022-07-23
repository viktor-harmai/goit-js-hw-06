const refs = {
  inputEl: document.querySelector('#font-size-control'),
  textEl: document.querySelector('#text'),
};

refs.inputEl.addEventListener('input', onInput);

function onInput(event) {
  const value = event.currentTarget.value;
  refs.textEl.style.fontSize = `${value}px`;
}
