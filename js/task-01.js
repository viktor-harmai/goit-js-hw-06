const body = document.body;

//========= находим и считаем ко-во категорий для ul#categories =========

const list = body.firstElementChild.nextElementSibling;
// console.log(list);
const amountElList = list.children.length;

console.log('Number of categories:', amountElList);

//======находим и выводим текст заголовка и ко-во елементов ======
const items = list.children;

for (const item of items) {
  const nameItem = item.firstElementChild.textContent;
  const amountElItem = item.lastElementChild.children.length;

  console.log('');
  console.log('Category:', nameItem);
  console.log('Elements:', amountElItem);
}
