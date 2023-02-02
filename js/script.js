// //1
// let name = "Gilani"; //2 string
// //3
// const age = "24"; //3 namber
// if (age < 15) {
//   console.log(`Доступ запрещен`);
// } else {
//   console.log(`Привет ${name}`);
// }
// //5
// function viewMoney() {
//   console.log("Вот вам 10$");
// }
// viewMoney();

// //6
// function getMoney(a) {
//   return a;
// }
// getMoney("Вот вам 10$");

// //7
// function cash(s) {
//   console.log(`Вот вам ${s}$`);
// }
// cash(500);

// //8
// function func(q) {
//   console.log(Math.pow(q, 2));
// }
// func(5);

// //9
// function rar(r, e, w) {
//   console.log(Math.max(r, e, w));
// }
// rar(500, 200, 256);

// //10
// function disc(a, b, c) {
//   console.log(Math.pow(b, 2) - 4 * a * c);
// }
// disc(4, 6, 2);

// //11
// function even_or_Odd(a, b) {
//   if (a % 2 && b % 2) {
//     return a + b;
//   } else if (a % 2 || b % 2) {
//     if (a % 2) {
//       return a;
//     }
//     return b;
//   } else {
//     return a * b;
//   }
// }
// even_or_Odd(2, 9);

//1
let a = ["Lorem", 123, true, "ipsum"];

a.unshift(254, "Gilani", 589);

console.log(a);
console.log(a.length);
console.log(a[0]);
console.log(a[a.length - 1]);

//2
let em = ["Gilani", 24, "Abdullah", 562, true];

em.unshift(245, 598);
em.push(687, "Khas", 35, "Djabrail");
em.pop();
em.splice(8, 9);
em.shift();

console.log(em);

//3
let number = [1, 3, 5, 7, 9];
number[0] *= 2;
number[1] *= 2;
number[2] *= 2;
number[3] *= 2;
number[4] *= 2;

number.splice(2, 1);
number.splice(0, 2, "четные числа");
console.log(number);
