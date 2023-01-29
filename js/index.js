let name = "Gilani"; // string

const age = "24"; //namber
if (age < 15) {
  console.log(`Доступ запрещен`);
} else {
  console.log(`Привет ${name}`);
}

function viewMoney() {
  console.log("Вот вам 10$");
}
viewMoney();

function getMoney() {
  return getMoney;
  console.log("Вот вам 10$");
}
getMoney();

function cash(s) {
  console.log(`Вот вам ${s}$`);
}
cash(500);

function func(q) {
  console.log(Math.pow(q, 2));
}
func(5);

function rar(r, e, w) {
  console.log(Math.max(r, e, w));
}
rar(500, 200, 256);

function disc(a, b, c) {
  console.log(Math.pow(b, 2) - 4 * a * c);
}
disc(4, 6, 2);

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
even_or_Odd(2, 9);
