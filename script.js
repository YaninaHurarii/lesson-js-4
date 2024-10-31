/* 1.  Запитайте у користувача два числа. Перевірте, чи є кожне з введених значень числом. Якщо ні, то запитуйте у користувача нове значення до тих пір, поки воно не буде числом. Виведіть на екран всі числа від меншого до більшого за допомогою циклу for.*/


let firstNumber = +prompt("Введить перше число");
let secondNumber = +prompt("Введить друге число");

if ((Number(firstNumber)) && (Number(secondNumber))) {
  alert("Ви ввели число");
  
}
else if (isNaN) {
  alert("Ви ввели не число"); //(firstNumber) || isNaN(secondNumber)

  while (true) {
    firstNumber = +prompt("Введить перше число");
    secondNumber = +prompt("Введить друге число");
    if (Number(firstNumber) && Number(secondNumber)) {
      alert("Ура! Число");
      break;
    } else {
      alert("Ви ввели не число");
    }
  }
}

let iterable = [firstNumber, secondNumber];
iterable.sort((firstNumber, secondNumber) => firstNumber - secondNumber);

console.log(iterable);

console.log(firstNumber);
console.log(secondNumber);



/* 2. Напишіть програму, яка запитує в користувача число та перевіряє, чи воно є парним числом. Якщо введене значення не є парним числом, то запитуйте число доки користувач не введе правильне значення.*/



do {
  let num = +prompt("Введить число", 0);
  if (num % 2 == 0) {
    alert("Ви ввели парне число");
    break;
  }
  else {
    alert("Ви ввели непарне число");
  }
  console.log(num);
} while (true);


