const refs = {
  inputEl: document.querySelector('#font-size-control'),
  textEl: document.querySelector('#text'),
};

refs.inputEl.addEventListener('input', onInput);

function onInput(event) {
  refs.textEl.style.fontSize = `${event.currentTarget.value}px`;
}
