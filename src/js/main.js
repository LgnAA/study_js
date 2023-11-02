
let money = 300;
let income = 10;
let addExpenses = '30 ИНТЕРНЕТ, 10 ТАКСИ, 10 КОММУНАЛКА';
// строка с перечислением дополнительных расходов 
// через запятую (например: интернет, такси, коммуналка),
let deposit = (100 ===100);
let mission = 1000;
let period = 12;
const pi = 3.14;


// - Вывести в консоль тип данных значений переменных money, income, deposit;
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
// - Вывести в консоль длину строки addExpenses
console.log(addExpenses.length);
// - Вывести в консоль “Период равен (period) 
// месяцев” и “Цель заработать (mission) рублей/долларов/гривен/юани”
console.log('Период равен '+ (period)+' месяцев '+'Цель заработать '+(mission) +' юаней')
// - Привести строку addExpenses к нижнему регистру и разбить строку 
// на массив, вывести массив в консоль
console.log(addExpenses.toLowerCase());
// - Привести строку addExpenses к нижнему 
// регистру и разбить строку на массив, вывести массив в консоль
console.log(addExpenses.split(','));
// - Объявить переменную budgetDay и присвоить дневной бюджет (доход за месяц / 30)
// - Вывести в консоль budgetDay
let budgetDay = money/30;
console.log(budgetDay);

// УСЛОЖНЕННОЕ
// 1) Создать переменную num со значением 266219 (тип данных число)
let num = 266219;
console.log(typeof num);
// 2) Вывести в консоль произведение (умножение) цифр этого числа
// Например: число 123, при помощи javaScript получить каждое цифру ( 1, 2, 3 ) и перемножить их.
// Правильно использовать цикл или методы перебора.
// console.log(num.toString().split('').reduce((a, b)=>a * b));
console.log(num.toString());
let strictNum = num.toString();
console.log(strictNum.split(''));
let splitNum = strictNum.split('');
console.log(splitNum);
console.log(splitNum.reduce((a, b)=>a * b));
let reduceNum = splitNum.reduce((a, b)=>a * b);
console.log(reduceNum);
// 4) Вывести на экран первые 2 цифры полученного числа
console.log(reduceNum.toString().substring(0,2));



