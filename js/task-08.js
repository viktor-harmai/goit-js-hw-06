const refs = {
  formEl: document.querySelector('.login-form'),
};

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  const message = 'Please fill in all the fields!';

  if (email.value === '' || password.value === '') {
    return alert(message);
  }

  //======================FormData=====================
  const formData = new FormData(event.currentTarget);
  console.log(formData);

  for (const pair of formData.entries()) {
    console.log(pair[0] + ': ' + pair[1]);
  }

  //   formData.forEach((value, name) => {
  //     console.log('name:', name);
  //     console.log('value:', value);
  //   });

  //======================reset============================
  event.currentTarget.reset();
}
