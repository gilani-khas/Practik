/*Practika №1*/

/*
//1
let name = "Gilani"; //2 string
//3
const age = "24"; //4 namber
if (age < 15) {
  console.log(`Доступ запрещен`);
} else {
  console.log(`Привет ${name}`);
}
//5
function viewMoney() {
  console.log("Вот вам 10$");
}
viewMoney();

//6
function getMoney(a) {
  return a;
}
getMoney("Вот вам 10$");

//7
function cash(s) {
  console.log(`Вот вам ${s}$`);
}
cash(500);
 
//8
function func(q) {
  console.log(Math.pow(q, 2));
}
func(5);

//9
function rar(r, e, w) {
  console.log(Math.max(r, e, w));
}
rar(500, 200, 256);

//10
function disc(a, b, c) {
  console.log(Math.pow(b, 2) - 4 * a * c);
}
disc(4, 6, 2);

//11
function even_or_Odd(a, b) {
  if (a % 2 && b % 2) {
    return a + b;
  } else if (a % 2 || b % 2) {
    if (a % 2) {
      return a;
    }
    return b;
  } else {
    return a * b;
  }
}
even_or_Odd(2, 9);*/

/*Practika №2*/

const cities = [
  {
    name: "Москва",
    population: 12506468,
  },
  {
    name: "Санк-Петербург",
    population: 5351935,
  },
  {
    name: "Новосибирск",
    population: 1612833,
  },
  {
    name: "Калининград",
    population: 482443,
  },
  {
    name: "Калуга",
    population: 336726,
  },
];

//1
cities.unshift({
  name: "Грозный",
  population: 326439,
});
cities.push({
  name: "Дубай",
  population: 3526254,
});

console.log(cities);

//2
cities.forEach((item) => {
  console.log(`Город ${item.name}, насиление ${item.population}`);
});

//3
let nev = cities.filter((item) => {
  return item.population > 1000000;
});
console.log(nev);

//4

let nev1 = cities.map((item) => {
  return item.population * 1.5;
});
console.log(nev1);

//5

let nev2 = nev1.reduce((sum, item) => {
  return sum + item;
});
console.log(nev2);
