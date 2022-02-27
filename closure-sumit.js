// ============ basic ==========
const num1 = 3;

function addTo() {
  const num2 = 7;
  return function () {
    return num1 + num2;
  };
}

const sum = addTo();
// console.dir(sum); // here is come closure

// 1. =========== Private var/property ==============
function bankAccount(initialBalance) {
  const balance = initialBalance;

  return function () {
    return balance;
  };
}
const account = bankAccount(1000);
// console.log(account());

// example 2
function stopWatch() {
  const startTime = Date.now();

  return function getDelay() {
    console.log(Date.now() - startTime);
  };
}
var timer = stopWatch();

// creating delay
for (let i = 0; i < 1000000; i++) {
  var a = Math.random() * 10000;
}

// timer();
// console.dir(timer);

// clear garbage collection if there is no need to hold the ref of timer
// timer = null;
// timer(); // will produce an error saying not defined

// 3. Closure in loop and async
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i + 1);
  }, 1000);
} // output: 1 2 3 4 because i's ref is preserved in closure and every iteration a new i is created

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i + 1);
//   }, 1000);
// } // output: 4 4 4 4 because its refer to single i and final value of i = 2
// console.log(i) // print 3 when using var but undefined defined using let

// Tip: 1. closure doest not contain value. it always kep reference
