"use strict";

// task 1 slow approach
function fib(n) {
  return n < 2 ? n : fib(n - 1) + fib(n - 2); // Fn = Fn-1 + Fn-2
}

var callResult = fib(6);
console.log('slow', callResult);

// fast approach
function fibFor(n) {  // a = 1|b = 1|res = a + b|a = b|b = res;
  // arr [1 1 2 3 5 8] 1+1|2+1|3+2|5+3|7+6|8+13
  var a = 1,b = 1;

 for (var i = 0; i < n-2; i+=1) {
   if (n > 2) {
     var result = a + b;
     a = b;
     b = result;
   }
 }

 return n < 2 ? n : b;
}

var callResult1 = fibFor(7);
console.log('fast', callResult1);

// task 2
var n = 1000;
var num = 0;

// fast iterator
for (let i = 0; i < n; i+=1) {
  if (n > 50) {
    n /= 2;
  } else {
    num = i;
    break;
  }
}
console.log('cycle iterators', num);

// slow iterator
function rec2(n, num = 0) {
  return n > 50 ? rec2(n / 2, num+1) : num;
}

var callResult2 = rec2(1000);
console.log('recursion iterators', callResult2);
