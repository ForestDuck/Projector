// Цей код виводить текст "start" в консоль.

// Далі, створюється новий об'єкт Promise з назвою promise1, 
// який приймає функцію зворотного виклику з двома параметрами: 
// resolve та reject. У цій функції спочатку виводиться число 1 в консоль,
//  а потім викликається функція resolve з аргументом 2.

// На наступному рядку, за допомогою методу .then(), 
// до promise1 додається функція зворотного виклику, 
// яка отримає значення, яке було передано в resolve(). 
// Ця функція зворотного виклику просто виводить отримане 
// значення до консолі.

// Коли об'єкт Promise promise1 виконується, 
// він спочатку виведе число 1 до консолі, 
// а потім викличе функцію resolve() з аргументом 2. 
// Це викличе виконання функції зворотного виклику, 
// яка була додана до promise1 за допомогою методу .then(). 
// Ця функція зворотного виклику виведе число 2 до консолі.

// console.log('start');
// const promise1 = new Promise((resolve, reject) => {
// console.log(1)
// resolve(2)
// })

// promise1.then(res => {
// console.log(res)
// })

// В другому методі .then() викидається помилка, 
// то виконається метод .catch(), який поверне значення 1. 
// Далі виконаються наступні методи .then(), що додають 1 
// до повернутого значення 1, тобто отримуємо значення 2. 
// Останній метод .then() виводить це значення 2 до консолі.

// Promise.resolve(1)
// 		.then((x) => x + 1)
// 		.then((x) => { throw new Error('My Error') })
// 		.catch(() => 1)
// 		.then((x) => x + 1)
// 		.then((x) => console.log(x))
// 		.catch(console.error)

// // 

const promise = new Promise(res => res(2));
	promise.then(v => {
	        console.log(v);
	        return v * 2;
	    })
	    .then(v => {
	        console.log(v);
	        return v * 2;
	    })
	    .finally(v => {
	        console.log(v);
	        return v * 2;
	    })
	    .then(v => {
	        console.log(v);
	    });