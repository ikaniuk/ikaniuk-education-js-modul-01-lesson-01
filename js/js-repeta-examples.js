// ---------------------- REPETA---------------------------------

// js/03-numbers.js

/*
 * Напиши скрипт который просит пользователя ввести число и степень,
 * возводит число в эту степень и выводит результат в консоль
 */

// const userNumber = Number(prompt('Enter Number'));
// const power = Number(prompt('Enter power'));

// console.log(userNumber);
// console.log(power);
// console.log(Math.pow(userNumber, power));

// ----------------------------------------------------------
// js/04-strings.js

/*
 * Напиши скрипт который выведет строку в формате:
 * «Гость x y поселяется в z номер q»,
 * подставив вместо x y z q значения переменных
 */

// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// const type = 'VIP';
// const room = 716;

// const message = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;

// console.log(message);
// console.log(`Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`);


// --------------------------------------------------------------------------
// ----------------06-1-segment.js

/*
 * Напиши скрипт который проверяет вхождение числа
 * в отрезок обозначенный x1 и x2.
 *
 * - До x1
 * - После x2
 * - От x1 до x2
 * - До x1 или после x2
 */
// const x1 = 10;
// const x2 = 30;
// const number = 20;


// console.log(`Число ${number} попадает в отрезок до ${x1}?`, number < x1);
// console.log(`Число ${number} попадает в отрезок после ${x2}?`, number > x2);
// console.log(`Число ${number} попадает в отрезок от ${x1} и до ${x2}?`, number > x1 && number < x2);
// console.log(`Число ${number} попадает в отрезок до ${x1} или после ${x2}?`, number < x1 || number > x2);


// ----------------------------------------------
// -------------06-2-chat.js
/*
 * Напиши скрипт который проверяет возможность открыть чат с пользователем.
 * Для этого пользователь должен быть:
 * - другом
 * - онлайн
 * - без режима не беспокоить
 */

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log('Можно открыть чат? ', canOpenChat);


// --------------------------------------------------------
// ------------------06-3-subscription.js

/*
 * Напиши скрипт проверки подписки пользователя при доступе к контенту
 * - Есть три типа подписки: free, pro и vip.
 * - Получить доступ могут только пользователи pro и vip
 */

// const sub = 'vip';
// const canAccessContent = sub === 'pro' || sub === 'vip';

// console.log('Есть доступ к контенту?', canAccessContent);


// ----------------------------------------
// ---------07-1-purchase.js

/*
 * Напиши скрипт обработки покупки в магазине.
 *
 * - Баланс пользователя хранится в переменной balance
 * - Сумма покупки хранится в переменной payment
 *
 * - Перед проверкой вывести сообщение:
 * «Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на счету»
 *
 * - Если сумма покупки не превышает баланс:
 *    - Вычесть из баланса сумму покупки
 *    - Вывести сообщение «На счету осталось [число] кредитов»
 * - Если сумма покупки превышает баланс:
 *    - Вывести сообщение «На счету недостаточно средств для проведения операции!»
 * - В конце вывести сообщение «Операция завершена»
 */

// let balance = 10000;
// const payment = 20000;

// console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`)

// if (payment < balance) {
//     balance -= payment;
//     console.log('Все хорошо, снимаем деньги... Спасибо за покупку!');
//     console.log(`На счету осталось ${balance} кредитов`);
// }else{
//     console.log('На счету недостаточно средств для проведения операции!');
// }

// console.log('Операция завершена');


// -------------------------------------------------
// -----------------07-2-discount.js
/*
 * Напиши скрит подсчёта суммы покупки со скидкой в зависимости от потраченной суммы за всё время (партнёрская программа).
 *
 * - Общая сумма потраченного хранится в переменной totalSpent
 * - Сумма текущего платежа хранится в переменной payment
 * - Скидка хранится в переменной discount
 *
 * - Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
 * - Если потрачено от [1000 до 5000) - серебрянный партрёр, скидка 5%
 * - Если потрачено больше [5000 - золотой партрёр, скидка 10%
 * - Если потрачено меньше 100) - не партнёр, скидка 0%
 *
 * - В результате вывести сообщение
 * «Оформляем заказ на сумму [сумма] со скидкой [скидка]%»
 */

// const totalSpent = 5000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//     discount = 0.02;
// }else if (totalSpent >=1000 && totalSpent < 5000) {
//     discount = 0.05;   
// } else if (totalSpent >= 5000) {
//     discount = 0.1;
// } else {
//     discount = 0;
// }
// payment -= payment * discount;

// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`)



