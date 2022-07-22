const body = document.body;

//========= находим и считаем ко-во категорий для ul#categories =========

const list = body.firstElementChild.nextElementSibling;
// console.log(list);
const amountElList = list.children.length;

console.log('Number of categories:', amountElList);

//======находим и выводим текст заголовка для 1-й категории и ко-во елементов ======

const firstItem = list.firstElementChild;
//console.log(firstItem);
const nameFirstItem = firstItem.firstElementChild.textContent;
const amountElFirstItem = firstItem.lastElementChild.children.length;

console.log('');
console.log('Category:', nameFirstItem);
console.log('Elements:', amountElFirstItem);

//======находим и выводим текст заголовка для следующей категории и ко-во елементов ======

const nextItem = list.firstElementChild.nextElementSibling;
//console.log(nextItem);
const nameNextItem = nextItem.firstElementChild.textContent;
const amountElNextItem = nextItem.lastElementChild.children.length;

console.log('');
console.log('Category:', nameNextItem);
console.log('Elements:', amountElNextItem);

//======находим и выводим текст заголовка для последней категории и ко-во елементов ======

const lastItem = list.lastElementChild;
const nameLastItem = lastItem.firstElementChild.textContent;
const amountLastItem = lastItem.lastElementChild.children.length;

console.log('');
console.log('Category:', nameLastItem);
console.log('Elements:', amountLastItem);
