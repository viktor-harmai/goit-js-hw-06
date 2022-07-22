let counterValue = 0;

const actions = document.querySelectorAll('#counter button');

const rander = () => {
  actions[0].nextElementSibling.textContent = counterValue;
};

const onClickDecrement = () => {
  counterValue -= 1;
  rander();
};

const onClickIncrement = () => {
  counterValue += 1;
  rander();
};

actions[0].addEventListener('click', onClickDecrement);
actions[1].addEventListener('click', onClickIncrement);
