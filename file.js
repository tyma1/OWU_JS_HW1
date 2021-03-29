//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//  Вивести кожну змінну за допомогою: console.log , alert, document.write

let str1 = 'hello';
let str2 = 'owu';
let str3 = 'com';
let str4 = 'ua';
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let num5 = 3.14;
let num6 = 2.7;
let num7 = 16;
let bool1 = true;
let bool2 = false;

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);
console.log(bool1);
console.log(bool2);

alert(str1);
alert(str2);
alert(str3);
alert(str4);
alert(num1);
alert(num2);
alert(num3);
alert(num4);
alert(num5);
alert(num6);
alert(num7);
alert(bool1);
alert(bool2);

document.write(str1, '<br/>');
document.write(str2, '<br/>');
document.write(str3, '<br/>');
document.write(str4, '<br/>');
document.write(num1, '<br/>');
document.write(num2, '<br/>');
document.write(num3, '<br/>');
document.write(num4, '<br/>');
document.write(num5, '<br/>');
document.write(num6, '<br/>');
document.write(num7, '<br/>');
document.write(bool1, '<br/>');
document.write(bool2, '<br/>', '<hr/>');


// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write

let str5 = str1;
let str6 = str2;
let str7 = str3;
let str8 = str4;
let num8 = num1;
let num9 = num2;
let num10 = num3;
let num11 = num4;
let num12 = num5;
let num13 = num6;
let num14 = num7;
let bool3 = bool1;
let bool4 = bool2;

console.log(str5);
console.log(str6);
console.log(str7);
console.log(str8);
console.log(num8);
console.log(num9);
console.log(num10);
console.log(num11);
console.log(num12);
console.log(num13);
console.log(num14);
console.log(bool3);
console.log(bool4);

alert(str5);
alert(str6);
alert(str7);
alert(str8);
alert(num8);
alert(num9);
alert(num10);
alert(num11);
alert(num12);
alert(num13);
alert(num14);
alert(bool3);
alert(bool4);

document.write(str5, '<br/>');
document.write(str6, '<br/>');
document.write(str7, '<br/>');
document.write(str8, '<br/>');
document.write(num8, '<br/>');
document.write(num9, '<br/>');
document.write(num10, '<br/>');
document.write(num11, '<br/>');
document.write(num12, '<br/>');
document.write(num13, '<br/>');
document.write(num14, '<br/>');
document.write(bool3, '<br/>');
document.write(bool4, '<br/>', '<hr/>');


// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//   Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

let name = prompt ('Імя?');
let middleName = prompt ('По батькові?');
let age = prompt ('Вік?');
alert('Вітаю ' + name + ' ' + middleName + '. Тобі '+ age + ' років.');

// - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).

let joined = name + middleName + age;
alert(joined);

// - За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.

let k = prompt("enter first number:");
let l = prompt("enter second number:");
let m = prompt("enter third number:");

console.log(Number(k));
console.log(Number(l));
console.log(Number(m));

// - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.

let number1 = prompt("enter first number:");
let number2 = prompt("enter second number:");
let number3 = prompt("enter third number:");
let number4 = prompt("enter fourth number:");
let sum = parseInt(number1) + parseInt(number2) + parseInt(number3) + parseInt(number4);
console.log(sum);

// - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.
// Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.

let numb1 = prompt("enter first number:");
let numb2 = prompt("enter second number:");
let numb3 = prompt("enter third number:");
let result = parseFloat(numb1) + parseFloat(numb2) +parseFloat(numb3);
console.log(result);

// - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.

let nm1 = prompt("enter first number:");
let nm2 = prompt("enter second number:");
let nm3 = prompt("enter third number:");
sum1 = Math.round(nm1) + Math.round(nm2) + Math.round(nm3);
console.log(sum1);

// За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//     Example. Число 1 = 5. Число 2 = 2. Результат = 25

let int1 = prompt("Enter first number:");
int1 = parseInt(int1);
let int2 = prompt("Enter first number:");
int2 = parseInt(int2);
console.log(Math.pow(int1, int2));

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));

// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//   В однакових виразаї не використовувати однакові оператори!!!

console.log(5 < 6) // true
console.log(5 > 6) // false
console.log(5 >= 6) // false
console.log(5 === 6) // false
console.log(10 === 10) // true
console.log(10 >= 10) // true
console.log(10 < 10) // false
console.log(10 > 10) // false
console.log(10 !== 10) // false
console.log(123 === '123') // false
console.log(123 == '123') // true

