'use strict';
// // Task 1

// // Потрібно створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі,
// // нарцис не знає нікого.

// //not found
// const people1 = [
//   {
//     name: 'Alex',
//     know: ['Eva', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: ['Ivan'],
//   },
//   {
//     name: 'Eva',
//     know: ['Jhon', 'Ivan'],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Alex'],
//   },
// ];

// //Not found
// const people2 = [
//   {
//     name: 'Alex',
//     know: ['Eva', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: [],
//   },
//   {
//     name: 'Eva',
//     know: [],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Alex'],
//   },
// ];

// // jhon
// const people3 = [
//   {
//     name: 'Alex',
//     know: ['Eva', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: [],
//   },
//   {
//     name: 'Eva',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Alex'],
//   },
// ];

// function findNarcis(peoples) {
//   const notFoundMessage = 'Narcis not found';
//   const likelyNarcis = peoples.filter((people) => people.know.length === 0);
//   //   console.log(likelyNarcis);
//   if (likelyNarcis.length !== 1) {
//     return notFoundMessage;
//   }
//   const isNarcis = peoples.find((people) => {
//     if (people.name !== likelyNarcis[0].name) {
//       return !people.know.includes(likelyNarcis[0].name);
//     }
//   });

//   console.log(isNarcis);
//   return isNarcis ? notFoundMessage : likelyNarcis[0].name;
// }

// console.log(findNarcis(people1));
// console.log(findNarcis(people2));
// console.log(findNarcis(people3));

// Task 2
//Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати а той обє'кт який співпав видалити з масиву.
//(Потрібно мутувати даний масив, створювати новий не потрібно)

// const products = [
//   {
//     id: 'sku1',
//     qty: 1,
//   },
//   {
//     id: 'sku2',
//     qty: 2,
//   },
//   {
//     id: 'sku3',
//     qty: 3,
//   },
//   {
//     id: 'sku1',
//     qty: 6,
//   },
//   {
//     id: 'sku1',
//     qty: 8,
//   },
//   {
//     id: 'sku2',
//     qty: 19,
//   },
//   {
//     id: 'sku4',
//     qty: 1,
//   },
// ];

// function productCart(product) {
//   for (let i = 0; i < products.length; i += 1) {
//     for (let j = i + 1; j < products.length; j += 1) {
//       if (products[i].id === products[j].id) {
//         products[i].qty += products[j].qty;
//         j -= 1;
//         products.splice(j, 1);
//       }
//     }
//   }
//   return product;
// }
// console.log(productCart(products));

// Task 3

// 1. посчитать общий возраст пользователей у которых есть параметр age тсп REDUCE
// 2. показать имена друзей у которых есть Potter

// const friends = [
//   { name: 'Anna', books: ['Bible', 'Harry Potter'], age: 21 },
//   { name: 'Bob', books: ['War and peace', 'Romeo and Juliet'], age: 26 },
//   { name: 'Alice', books: ['War and peace', 'Romeo and Juliet'] },
//   {
//     name: 'Oleksii',
//     books: ['Harry Potter', 'Bible', 'War and peace', 'Romeo and Juliet'],
//     age: 26,
//   },
// ];

// const usersWithAge = friends.reduce((acc, friend) => {
//   if ('age' in friend) {
//     acc += friend.age;
//   }
//   return acc;
// }, 0);

// console.log(usersWithAge);

// const usersWithPotter = friends.reduce((acc, friend) => {
//   if (friend.books.includes('Harry Potter')) {
//     acc += friend.name + ' ';
//   }
//   return acc;
// }, '');

// console.log(usersWithPotter);
// тоже самое тернарником:

// const usersWithPotter = friends.reduce(
//   (acc, friend) =>
//     friend.books.includes('Harry Potter') ? (acc += friend.name + ' ') : acc,
//   ''
// );

// console.log(usersWithPotter);

let userInfo = {
  name: 'Vasya',
  age: 30,
};

let user = userInfo;
user.age = 45;
console.log(userInfo.age);
