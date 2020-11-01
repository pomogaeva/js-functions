// Task 1 - compare numbers
let numberOne = prompt('Enter a number');
let numberTwo = prompt('Enter another number');

function compare(a, b) {
  if (!isFinite(a) || !isFinite(b) || a == 0 || b == 0) {
    return 'Invalid input';
  } else {
    if (a > b) {
      return '1';
    } else if (a < b) {
      return '-1';
    } else {
      return '0';
    }
  }
}

alert(compare(numberOne, numberTwo));


// Task 2 - factorial
let value = prompt('Enter a number');

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

if (!isFinite(value) || value == 0) {
  alert('Invalid input!');
} else {
  alert(`Factorial of ${value} is equal to ${factorial(value)}`);
}


// Task 3 - make one number of 3 given
let firstNumber = prompt('Enter first number');
let secondNumber = prompt('Enter second number');
let thirdNumber = prompt('Enter third number');

function concat(a, b, c) {
  if (!isFinite(a) || !isFinite(b) || !isFinite(c) || a.length != 1 || b.length != 1 || c.length != 1) {
    return 'Invalid input';
  } else {
    return `Concatenated number is ${a.toString() + b.toString() + c.toString()}`;
  }
}

alert(concat(firstNumber, secondNumber, thirdNumber));


// Task 4 - calculate rectangle area
let width = prompt('Enter rectangle width');
let height = prompt('Enter rectangle height');

function rectangleArea(a, b) {
  if (isNaN(a) || isNaN(b) || a == 0 || b == 0) {
    return 'Invalid input';
  } else if (a == b || b == '') {
    return `Square area is ${a ** 2}`;
  } else if (a == '') {
    return `Square area is ${b ** 2}`;
  } else {
    return `Rectangle area is ${a * b}`;
  }
}

alert(rectangleArea(width, height));


// Task 5 - check if number is a perfect number
let number = parseFloat(prompt('Enter a number'));

function isPerfectNumber(a) {
  let check = 0;

  for (let i = 1; i <= a / 2; i++) {
    if (a % i === 0) {
      check += i;
    }
  }

  if (!isFinite(a)) {
    return 'Invalid input';
  } else if (check === a && check !== 0) {
    alert('It is a perfect number');
  } else {
    alert('It is not a perfect number');
  }
}

isPerfectNumber(number);


// Task 6 - display perfect numbers from a range
function isPerfectNumber(a) {
  let check = 0;

  for (let i = 1; i <= a / 2; i++) {
    if (a % i === 0) {
      check += i;
    }
  }

  if (check === a && check !== 0) {
    return true;
  }
}

let rangeFrom = prompt('Enter range from number');
let rangeTo = prompt('Enter range to number');

function createRange(start, end) {
  let j = [];

  for (let i = start; i <= end; i++) {
    j.push(i);
  }
  return j;
}

let range = createRange(rangeFrom, rangeTo);

function getPerfectNumbers(range) {
  range.forEach(number => {
    if (isPerfectNumber(number)) {
      alert(`${number} is a perfect number`);
    }
  })
}

getPerfectNumbers(range);


// Task 7 - time in hh:mm:ss format
let inputHrs = prompt('Enter hours');
let inputMin = prompt('Enter minutes');
let inputSec = prompt('Enter seconds');

let hr,
  min,
  sec;

hr = (inputHrs.length == 1) ? `0${inputHrs}` : inputHrs;
min = (inputMin.length == 1) ? `0${inputMin}` : inputMin;
sec = (inputSec.length == 1) ? `0${inputSec}` : inputSec;

function showTime(a, b, c) {
  if (!isFinite(a) || !isFinite(b) || !isFinite(c) || a < 0 || b < 0 || b > 59 || c < 0 || c > 59 || a.length > 2 || b.length > 2 || c.length > 2) {
    return alert('Invalid input');
  } else {
    return alert(`${a || '00'}:${b || '00'}:${c || '00'}`);
  }
}

showTime(hr, min, sec);


// Task 8 - time in seconds from hh:mm:ss
let inputHours = +prompt('Enter hours');
let inputMinutes = +prompt('Enter minutes');
let inputSeconds = +prompt('Enter seconds');

const minToSec = 60;
const hrsToSec = minToSec * 60;

function showTimeInSec(a, b, c) {
  if (!isFinite(a) || !isFinite(b) || !isFinite(c) || a < 0 || b < 0 || b > 59 || c < 0 || c > 59 || a.length > 2 || b.length > 2 || c.length > 2) {
    return alert('Invalid input');
  } else {
    a *= hrsToSec;
    b *= minToSec;
    return alert(`Time in seconds is ${a + b + c}`);
  }
}

showTimeInSec(inputHours, inputMinutes, inputSeconds);


// Task 9 - time in hh:mm:ss from seconds
// Option 1 - creating Date obj
let timeInSec = +prompt('Enter time in seconds');

function convertTimeFromSec(a) {
  let time = new Date(a * 1000).toISOString().substr(11, 8);
  return alert(`Time is ${time}`);
}

convertTimeFromSec(timeInSec);

// Option 2 - using Math
let timeInSeconds = +prompt('Enter time in seconds');

const secToMin = 60;
const secToHrs = secToMin * 60;

let hours,
  minutes,
  seconds;

function convertTimeFromSeconds(a) {
  hours = Math.floor(a / secToHrs);
  a %= secToHrs;
  minutes = Math.floor(a / secToMin);
  seconds = a % secToMin;

  minutes = String(minutes).padStart(2, "0");
  hours = String(hours).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  return alert(`Your time is ${hours}:${minutes}:${seconds}`)
}

convertTimeFromSeconds(timeInSeconds);


// Task 10 - date difference in hh:mm:ss
let hrsFirstDate = +prompt('First date: enter hours');
let minFirstDate = +prompt('First date: enter minutes');
let secFirstDate = +prompt('First date: enter seconds');

let hrsSecondDate = +prompt('Second date: enter hours');
let minSecondDate = +prompt('Second date: enter minutes');
let secSecondDate = +prompt('Second date: enter seconds');

let timeInSecs,
  hrs,
  mins,
  secs;

const m = 60;
const h = m * 60;

let firstTime = showTimeInSec(hrsFirstDate, minFirstDate, secFirstDate);
let secondTime = showTimeInSec(hrsSecondDate, minSecondDate, secSecondDate);
let timeDif;

function showTimeInSec(a, b, c) {
  if (!isFinite(a) || !isFinite(b) || !isFinite(c) || a < 0 || b < 0 || b > 59 || c < 0 || c > 59 || a.length > 2 || b.length > 2 || c.length > 2) {
    return alert('Invalid input');
  } else {
    a *= h;
    b *= m;
    return timeInSecs = a + b + c;
  }
}

function calcDateDif(first, second) {
  if (first <= second) {
    return timeDif = second - first;
  } else {
    return timeDif = first - second;
  }
}

calcDateDif(firstTime, secondTime);

function convertTimeFromSeconds(a) {
  hrs = Math.floor(a / h);
  a %= h;
  mins = Math.floor(a / m);
  secs = a % m;

  mins = String(mins).padStart(2, "0");
  hrs = String(hrs).padStart(2, "0");
  secs = String(secs).padStart(2, "0");

  return alert(a = `${hrs}:${mins}:${secs}`);
}

convertTimeFromSeconds(timeDif);