let counterValue = 0;

const actions = document.querySelectorAll('#counter button');

//console.log(actions[0].nextElementSibling);

const rander = () => (actions[0].nextElementSibling.textContent = counterValue);

const onClickDecrement = event => {
  counterValue -= 1;
  return rander();
};

const onClickIncrement = event => {
  counterValue += 1;
  return rander();
};

actions[0].addEventListener('click', onClickDecrement);
actions[1].addEventListener('click', onClickIncrement);
