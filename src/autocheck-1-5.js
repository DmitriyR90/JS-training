// const a = 68;
// const y = 76;
// const z = a * y;
// console.log('первый подсчет:', z);
// console.log('quots single');

// let r;
// console.log(r);

// // Выносим варианты в массив
// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'cherry';
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);
// console.log(hasFruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.pop();
// console.log(numbers);
// console.log(numbers.length);

// // numbers.push(5);
// // console.log(numbers); // [1, 2, 3, 4, 5]

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi', 'Mango1'];
// console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
// // console.log(clients.slice(2)); // ["Poly", "Kiwi"]

// console.log(clients.slice(-2)); // ["Poly", "Kiwi"]

// function checkStorage(available, ordered) {
//   let message;

//   console.log(message);
//   if (ordered === 0) {
//     message = 'There are no products in the order!';
//     console.log('if0:', message);
//   } else if (ordered > available) {
//     message = 'our order is too large, there are not enough items in stock!';
//     console.log('if more:', message);
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//     console.log('if less:', message);
//   }

//   return message;
//   console.log(message);
// }

// checkStorage(100, 130);
// checkStorage(100, 130);

// function checkStorage(available, ordered) {
//   let message;

//   if (ordered > available) {
//     message = 'Not enough goods in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }
//   console.log(message);
//   return message;

//   console.log('message', message);
// }

// checkStorage(100, 10);
// console.log(message);

// function checkStorage(available, ordered) {
//   let message;
//   console.log(message);

//   const = ordered > available ? 'aawe' : 'qweqwe';

//   console.log(message);
//   return message;
// }

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   message =
//     ordered > available
//       ? (message = 'Not enough goods in stock!')
//       : (message = 'The order is accepted, our manager will contact you');

//   // Change code above this line
//   console.log(message);
//   return message;
// }

// checkStorage(100, 110);

// const x = prompt('login');
// console.log(x);

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   // const x = prompt('log');
//   // console.log(x);
//   // if (password === null) {
//   //   message = 'Canceled by user!';
//   //   console.log(message);
//   // }

//   switch (password) {
//     case null:
//       message = 'Canceled by user!';
//       // console.log(x);
//       break;

//     case ADMIN_PASSWORD:
//       message = 'Welcome!';
//       // console.log(password);
//       break;

//     default:
//       // console.log(message);
//       message = 'Access denied, wrong password!';
//   }

//   console.log(message);
//   return message;
// }

// checkPassword(null);

// checkPassword('jqueryismyjam');

// checkPassword('polyhax');

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   let totalPrice;
//   let totalWords;

//   totalWords = message.split(' ').length;
//   console.log(totalWords);
//   totalPrice = totalWords * pricePerWord;
//   console.log(totalPrice);
//   return totalPrice;

//   // Change code above this line
// }

// calculateEngravingPrice('JavaScript is in my blood', 10); // 50

// function slugify(title) {
//   // Change code below this line
//   let slugedText;

//   slugedText = title.toLowerCase().split(' ').join('-');
//   console.log(slugedText);
//   return slugedText;

//   // Change code above this line
// }

// slugify('Arrays for begginers');

///////////////////////// task 16

// function makeArray(firstArray, secondArray, maxLength) {
//   let newArray;
//   newArray = firstArray.concat(secondArray).slice(0, maxLength);

//   // newArray =
//   //   newArray.maxLength > maxLength ? newArray.slice(0, maxLength) : newArray;
//   console.log(newArray);
//   return newArray;
// }

// makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3);

//              21
// function findLongestWord(string) {
//   // Change code below this line
//   let array = string.split(' ');
//   console.log(array);
//   let mostLongWord = array[0];

//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i].length > mostLongWord.length) {
//       mostLongWord = array[i];
//       // console.log(array[i]);
//       // console.log(mostLongWord);
//     }
//   }
//   console.log(mostLongWord);
//   return mostLongWord;
// }

// findLongestWord('The quick brown fox jumped over the lazy dog');

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   console.log(numbers);
//   // Change code below this line

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//     console.log(numbers);
//   }
//   // Change code above this line
//   return numbers;
// }

// createArrayOfNumbers(14, 17);

// const numbers = [54];
// numbers.push(5);
// console.log(numbers);

// function filterArray(numbers, value) {
//   // Change code below this line
//   let minArray = [];
//   console.log('stage1', minArray);

//   for (i = 0; i <= numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       minArray.push(numbers[i]);
//       console.log('stage2', minArray);
//     }
//   }
//   // Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 3);

// function getCommonElements(array1, array2) {
//   let identArray = [];

//   if (array1.length > array2.length) {
//     for (let i = 0; i <= array1.length; i += 1) {
//       if (array2.includes(array1[i])) {
//         identArray.push(array1[i]);
//       }
//     }
//   } else {
//     for (let i = 0; i <= array1.length; i += 1) {
//       if (array1.includes(array2[i])) {
//         identArray.push(array2[i]);
//       }
//     }
//   }
//   console.log(identArray);
//   return identArray;
// }

// getCommonElements([1, 2, 3], [2, 4]);

// getCommonElements([2, 4], [1, 2, 3]);

// getCommonElements([1, 2, 3], [2, 1, 17, 19]);

// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);

// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);

// function getCommonElements(array1, array2) {
//   let identArray = [];

//   for (let i = 0; i <= array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       identArray.push(array1[i]);
//     }
//   }

//   console.log(identArray);
//   return identArray;
// }

// getCommonElements([1, 2, 3], [2, 4]);

// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([2, 4], [1, 2, 3]);

// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([2, 1, 17, 19], [1, 2, 3]);

// function getEvenNumbers(start, end) {
//   let numbers = [];
//   console.log(numbers);

//   // numbers = numbers.push(start)
//   for (let i = start; i <= end; i += 1) {
//     numbers.push(i);
//     console.log(numbers);
//   }

//   let newArray = [];

//   for (const number of numbers) {
//     if (number % 2 === 0) {
//       newArray.push(number);
//       console.log(newArray);
//     }
//   }

//   // for ( const number of numbers )
// }

// getEvenNumbers(2, 5);

// function includes(array, value) {
//   // Change code below this line
//   for (const item of array) {
//     console.log(item);
//     if (item === value) {
//       console.log('=', item);
//       return true;
//     } else {
//       console.log('else ', item);
//     }
//   }
//   return false;
// }

// includes([1, 2, 3, 4, 5], 3);

// for (const iterator of object) {
// }

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line

//   for (item in object) {
//     if (object.hasOwnProperty(item)) {
//       propCount += 1;
//     }
//   }
//   // Change code above this line
//   console.log(propCount);
//   return propCount;
// }

// countProps({ name: 'Mango', age: 2 });
// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });
// countProps({});

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   for (const salarie of Object.values(salaries)) {
//     totalSalary += salarie;
//   }
//   // Change code above this line
//   console.log(totalSalary);
//   return totalSalary;
// }

// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });

//************************* 19  **** */

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let array = [];
//   for (const product of products) {
//     if (Object.keys(product).includes(propName)) array.push(product[propName]);
//   }

//   return array;

//   // Change code above this line
// }
// getAllPropValues('name');
// getAllPropValues('category');

//************************* 20  **** */

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;
//   for (const product of products) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//     }
//   }
//   console.log(totalPrice);
//   return totalPrice;
//   // Пиши код выше этой строки
// }

// calculateTotalPrice('Blaster'); //0
// calculateTotalPrice('Radar'); //5200

//************************* 25  **** */

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// Change code below this line

// const {
//   today: { high: highToday, low: lowToday, icon: todayIcon },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = '213',
//   },
// } = forecast;

// console.log(todayIcon);
// console.log(tomorrowIcon);

//************************* 29  **** */
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = {...defaultSettings, ...overrideSettings};

//************************* 30  **** */

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
//   const objTask = { category, priority, ...data, completed };

//   console.log(objTask);
//   return objTask;
//   // Change code above this line
// }

// makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' });

//************************* 31  **** */
// function add(...args) {
//   console.log(args);
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   // for (i = 0; i < args.length; i+=1) {

//   // }
//   console.log(total);
//   return total;
// }

// add(32, 6, 13, 19, 8);

//************************* 33  **** */

// function findMatches(...args) {
//   const matches = []; // Don't change this line
//   // console.log(args[0]);
//   const firstArg = args[0];
//   console.log(firstArg);

//   for (const arg of args) {
//     if (firstArg.includes(arg)) {
//       matches.push(arg);
//     }
//     // console.log(arg);
//     // console.log(findMatches[0]);
//   }
//   ///
//   console.log(matches);
//   return matches;
// }

// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);

//************************* 35  **** */

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],

//   updateBook(oldName, newName) {
//     console.log(this.books.indexOf(oldName));
//     console.log(this.books);
//     this.books.splice(this.books.indexOf(oldName), 1, newName);
//     console.log(this.books);
//   },
// };

// bookShelf.updateBook('Haze', 'Dungeon chronicles');

//*************************   **** */
// const atTheOldToad = {
//   // Change code below this line
//   position: [],

//   // Change code above this line
// };
// console.log(atTheOldToad.position);
//*************************   **** */

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   removePotion(potionName) {
//     // Change code below this line

//     this.potions.splice(this.potions.indexOf(potionName), 1);
//     console.log(this.potions);

//     // Change code above this line
//   },
// };
// atTheOldToad.removePotion('Dragon breath');

//************************* 41  **** */
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],

//   getPotions() {
//     // console.table(this.potions);
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//     return this.potions;
//   },
//   removePotion(potionName) {
//     for (i = 0; i < this.potions.length; i += 1) {
//       // console.log(this.potions[i].name);
//       if (potionName === this.potions[i].name) {
//         this.potions.splice(i, 1);
//         return this.potions;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (i = 0; i < this.potions.length; i += 1) {
//       if (oldName === this.potions[i].name) {
//         this.potions[i].name = newName;

//         return this.potions;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };
// console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 620 }));

// console.log(atTheOldToad.updatePotionName('Stone skin', 'Polymorth'));

// console.log(atTheOldToad.removePotion('Speed potion'));

// *****************************

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, makePizza, onOrderError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return makePizza(pizzaName);
//     }
//     return onOrderError(
//       `There is no pizza with a name ${pizzaName} in the assortment.`
//     );
//   },
// };

// Change code above this line

// Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach(function (item) {
//     if (secondArray.includes(item)) {
//       commonElements.push(item);
//     }
//   });

//   return commonElements;
// }

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArray.push(numbers[i] + value);
//     } else {
//       newArray.push(numbers[i]);
//     }
//   }
//   return newArray;
//   // Change code above this line
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// // Change code below this line
// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getUserNames = (users) => users.map((user) => user.name);

// console.log(getUserNames(users));
// console.log(3 % 2 === 0);

// const getUsersWithEyeColor = (users, color) =>
//   users.filter((user) => user.eyeColor === color);

// console.log(getUsersWithEyeColor(users, 'blue'));

// const getUsersWithAge = (users, minAge, maxAge) =>
//   users.filter((user) => user.age > minAge && user.age < maxAge);
// console.log(getUsersWithAge(users, 20, 30));

// const getUsersWithFriend = (users, friendName) =>
//   users.filter((user) => user.friends.includes(friendName));

// console.log(getUsersWithFriend(users, 'Briana Decker'));
// Поусик уникальных елементов=================
// const getFriends = (users) => {
//   const allFriends = users.flatMap((user) => user.friends);
//   return allFriends.filter((item, idx, array) => array.indexOf(item) === idx);
// };
// console.log(getFriends(users));

// ++++++++++++++++++ 35
// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   return acc + player.playtime / player.gamesPlayed;
// }, 0);
// console.log(totalAveragePlaytimePerGame);

// const calculateTotalBalance = users.reduce((totalBalance, user) => {
//   return totalBalance + user.balance;
// }, 0);

// const calculateTotalBalance = (users) =>
//   users.reduce((totalBalance, user) => {
//     console.log(totalBalance);
//     console.log(user.balance);
//     return totalBalance + user.balance;
//   }, 0);

// console.log(calculateTotalBalance(users));

// =========================== 45

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .sort((a, b) => a.localeCompare(b));
// console.log(names);

// ===============     46
// const getNamesSortedByFriendCount = (users) =>
//   [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map((user) => user.name);
// console.log(getNamesSortedByFriendCount(users));

// ======================    47

// const getSortedFriends = (users) =>
//   [...users]
//     .flatMap((user) => user.friends)
//     .filter((item, ind, array) => array.indexOf(item) === ind)
//     .sort((a, b) => a.localeCompare(b));

// console.log(getSortedFriends(users));

// ======================    48

// const getTotalBalanceByGender = (users, gender) => {
//   return [...users]
//     .filter((user) => user.gender === gender)
//     .map((user) => user.balance)
//     .reduce((acc, item) => {
//       return acc + item;
//     }, 0);
// };

// console.log(getTotalBalanceByGender(users, 'male'));

// for (i = 0, i < Array.length, i += 1)
// if ( indexOf(Array) === i ) {push}

// ==========blended

// const hogvarts = {
//   griffindor: [
//     {
//       name: 'Harry',
//       points: 15,
//     },
//     {
//       name: 'Hermiona',
//       points: 16,
//     },
//     {
//       name: 'Ron',
//       points: 14,
//     },
//   ],
//   sliserin: [
//     {
//       name: 'Draco',
//       points: 25,
//     },
//     {
//       name: 'Goyl',
//       points: 40,
//     },
//     {
//       name: 'Crabbe',
//       points: 5,
//     },
//   ],
// getAllPoints(name) {
//   let allPoints = 0;

//   for (const { points } of this[name]) {
//     console.log(points);
//     allPoints += points;
//   }
//   console.log(allPoints);
//   return allPoints;
// },
//   getAllPoints(name) {
//     return this[name].reduce((acc, { points }) => {
//       return (acc += points);
//     }, 0);
//   },
// };

// hogvarts.getAllPoints('sliserin');

// console.log(hogvarts.getAllPoints('griffindor'));
// ================ MOD5-01
// const phonebook = {
//   contacts: [],

//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },

//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },

//   getDate() {
//     return Date.now();
//   },
// };
// console.log(phonebook.contacts);
// // phonebook.add({
// //   name: 'Mango',
// //   email: 'mango@mail.com',
// //   list: 'friends',
// // });

// // console.log(phonebook.contacts);

// phonebook.add({
//   name: 'Poly',
//   email: 'poly@hotmail.com',
// });
// console.log(phonebook.contacts);

// class Storage {
//   constructor(items = []) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     return this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     console.log(this.items.indexOf(itemToRemove));
//     return this.items.splice(this.items.indexOf(itemToRemove), 1);
//   }
// }
// АНАЛОГИЧНО с применением Filter

// class Storage {
//   // Change code below this line
// #items
//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }

// Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
// let obj = {
//   0: 1,
//   0: 2,
// };

// console.log(obj['0']);
// console.log(obj['0'] + obj[0]);
