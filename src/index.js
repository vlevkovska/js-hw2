// Задача 1/32
// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// Задача 2/32
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }

//   return "Access denied, wrong password!";
//   // Change code above this line
// }

// Задача 3/32
function checkStorage(available, ordered) {
  // Change code below this line

  if (ordered === 0) {
    return "Your order is empty!";
  }
  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  }
  return "The order is accepted, our manager will contact you";
  // Change code above this line
}

//Задача 4/32
// Change code below this line
const fruits = ["apple", "plum", "pear", "orange"];

//Задача 5/32
const fruits = ["apple", "plum", "pear", "orange"];

// Change code below this line
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];

//Задача 6/32
const fruits = ["apple", "plum", "pear", "orange"];

// Write your code under this line
fruits[1] = "peach";
fruits[3] = "banana";

//Задача 9/32
function getExtremeElements(array) {
  // Change code below this line
  const firstElement = array[0];
  const lastElementIndex = array.length - 1;
  const lastElement = array[lastElementIndex];
  return [firstElement, lastElement];

  // Change code above this line
}
//Задача 10/32
function splitMessage(message, delimeter) {
  let words;
  // Change code below this line
  words = message.split(delimeter);
  // Change code above this line
  return words;
}

// Задача 11/32
function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line
  message = message.split(" ").length;
  const totalPrice = message * pricePerWord;
  return totalPrice;

  // Change code above this line
}

// Задача 20/32
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }
  // Change code above this line
  return total;
}

// Задача 22/32
function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }
  // Change code above this line
  return numbers;
}

// Задача 23/32
function filterArray(numbers, value) {
  // Change code below this line
  const newMassiv = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      newMassiv.push(numbers[i]);
    }
  }
  return newMassiv;

  // Change code above this line
}

// Задача 24/32
function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];
  return fruits.includes(fruit); // Change this line
}

// Задача 25/32
function getCommonElements(array1, array2) {
  // Change code below this line
  const newMassiv = [];
  for (const element of array1) {
    if (array2.includes(element)) {
      newMassiv.push(element);
    }
  }
  return newMassiv;

  // Change code above this line
}

// Условие задачи 26/32 (до рефакторинга)

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }

  // Change code above this line
  return total;
}

// Задача 26/32 (после рефакторинга)
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (const element of order) {
    total += element;
  }

  // Change code above this line
  return total;
}

// Условие задачи 27/32 (до рефакторинга)
function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (let i = 0; i < numbers.length; i += 1) {
    const number = numbers[i];

    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}

// Задача 27/32 (после рефакторинга)
function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (const element of numbers) {
    const number = numbers[element];

    if (element > value) {
      filteredNumbers.push(element);
    }
  }

  return filteredNumbers;
  // Change code above this line
}

// Задача 28/32
// Change code below this line
const a = 3 % 1;
const b = 4 % 3;
const c = 11 % 8;
const d = 12 % 7;
const e = 8 % 6;

// Задача 29/32
function getEvenNumbers(start, end) {
  // Change code below this line
  const evenNumbers = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;

  // Change code above this line
}

// Задача 30/32
const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

// Условие задачи 31 (до рефакторинга)
function findNumber(start, end, divisor) {
  // Change code below this line
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      number = i;
      break;
    }
  }

  return number;
  // Change code above this line
}

// Задача 31 (после рефакторинга)
function findNumber(start, end, divisor) {
  // Change code below this line

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }
  // Change code above this line
}

// Задача 32
function includes(array, value) {
  // Change code below this line
  for (const element of array) {
    if (element === value) {
      return element === value;
    }
  }
  // Change code above this line
  return false;
}
