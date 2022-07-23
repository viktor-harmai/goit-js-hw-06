const refs = {
  inputEl: document.querySelector('#validation-input'),
};

refs.inputEl.addEventListener('blur', onBlur);

function onBlur(event) {
  const onValue = event.currentTarget.value.length;
  const validValue = refs.inputEl.dataset.length;

  if (onValue == validValue) {
    refs.inputEl.classList.add('valid');
    refs.inputEl.classList.remove('invalid');
  } else {
    refs.inputEl.classList.add('invalid');
    refs.inputEl.classList.remove('valid');
  }

  //   onValue == validValue ? console.log('ok') : console.log('no');
  //   console.log(onValue);
  //   console.log(validValue);
}

// console.log('Value data - length:', refs.inputEl.dataset.length);
