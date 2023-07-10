// Модуль 1. Заняття 1. Змінні, типи та оператори

// Example 1 - Математичні оператори
// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = grapes - apples;
// console.log(diff);


// Example 2 - Комбіновані оператори
// 3міни вираз перевизначення комбінованим оператором +=.

// let students = 100;
// students += 50;
// console.log(students);


// Example 3 - Пріоритет операторів

// Розбери пріоритет операторів в інструкції привласнення значення змінної result.

// const result = 108 + 223 - 2 * 5;
// console.log(result);


// Example 4 - Клас Math

// Напиши скрипт, який виводить у консоль заокруглені вгору / вниз і т.д.значення змінної value.
// Використовуй методи Math.floor(), Math.ceil() та Math.round().Перевір що буде в консолі при
// значеннях 27.3 та 27.9.

// const value = 27.9;

// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value))


// Example 6 - Методи рядків та чейнінг

// Напиши скрипт, який розраховує індекс маси тіла людини.Для цього необхідно розділити вагу
// в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків
// (спеціально для завдання).Не цілі числа можуть бути задані у вигляді 24.7 або 24, 7, тобто
// як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = '88,3';
// // weight = weight.replaceAll(',', '.');
// // weight = Number.parseFloat(weight);
// weight = Number.parseFloat(weight.replaceAll(',', '.'));
// let height = '1.75';
// // height = height.replaceAll(',', '.');
// // height = Number.parseFloat(height);
// height = Number.parseFloat(height.replaceAll(',', '.'));


// const bmi = weight / Math.pow(height, 2);
// console.log(Number(bmi.toFixed(1))); // 28.8