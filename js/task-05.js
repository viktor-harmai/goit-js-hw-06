const refs = {
  inputEl: document.querySelector('#name-input'),
  nameLabel: document.querySelector('#name-output'),
};

refs.inputEl.addEventListener('input', onInput);

function onInput(event) {
  event.currentTarget.value === ''
    ? (refs.nameLabel.textContent = 'Anonymous')
    : (refs.nameLabel.textContent = event.currentTarget.value);
}

//===========для меня==================

// console.log(refs.nameLabel.textContent);

// function onInput(event) {
//   if (event.currentTarget.value !== '') {
//     refs.nameLabel.textContent = event.currentTarget.value;
//   } else {
//     refs.nameLabel.textContent = 'Anonymous';
//   }
//   console.log('value', event.currentTarget.value === '');
// }
