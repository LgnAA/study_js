// 3ий урок
'use strict';
// let a = 5;
// console.log('a: ', a);
// let question = confirm('тебе есть 18 лет?');
// let question2 = prompt('сколько тебе лет?', '18');
// // через запятую 18 это дефолтное значение можно выставить в поле ввода 
// console.log(question);
// console.log(question2);
console.log(3 + '3');
console.log('3' / '3');
console.log(typeof (3 + '3'));

console.log(Boolean(5));
console.log(!5);
console.log(!!5);
// преобразуем в булиновый тип 1вй пример через команду булин, 
// второе по хитрому
console.log(typeof String(10));
// альтернатива перевести в тип строки 
console.log(typeof (10 + ''));
console.log(typeof (10..toString()));
console.log(typeof (10 .toString()));
let a = 5;
console.log(typeof (a .toString()));

console.log(typeof Number('33'));
console.log(typeof +'33');
// // второе тернарный оператор, как альтернатива
// // прикол с тернарным оператором
// let question2 = +prompt('сколько тебе лет?', '18');
// console.log(question2);
// console.log(typeof question2);
let n = 10;
n *=1;
console.log(n);
console.log(typeof n, '-n');
console.log(parseInt('10.5 px', 16));
// достает только целые числа из строк где все подряд, второй параметр определяет систему исчесления
console.log(parseFloat('10.5px'));
// дробные включительно из строк где все подряд

// ветвление
// if (true) console.log('Истина');
// if (false) console.log('Этот код не выполнится');
let b = 5;
if (b===6) {
  console.log('каааааа')
  console.log('кака')
} else if (n===9) {
  console.log('abrakadabra')
} else console.log('ixixix')

switch (n){
  case 3:
  case 4:
  case 5:
    console.log('3-5');
    break;
    // группировка кейс
  case 7:
    console.log(7);
    break;
  case 8:
    console.log(8);
    break;
  default:
    console.log('GGWP')
}
// продолжит выполнять команды, если не написать break поэтому выбьет и 8
let result = n === 10 ? 'verno' : 'neverno';
console.log('result: ', result);