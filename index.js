"use strict";

// task 1 slow approach
function fib(n) {
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
}

var callResult =  fib(7);
console.log('медленый', callResult);

// fast approach
function fibFor(n) {  // a = 1|b = 1|c = a + b|a = b|b = c;
  // arr [1 1 2 3 5 8] 1+1|2+1|3+2|5+3
  var a = 1,b = 1;

 for (var i = 0; i < n-2; i+=1) {
   if (n > 2) {
     var result = a + b;
     a = b;
     b = result;
   }
 }

 return b;
}

var callResult1 = fibFor(5);
console.log('быстрый', callResult1);

// task 2
var n = 1000;
var num = 0;

// fast iterator
for (let i = 0; i < n; i+=1) {
  if (n >= 50) {
    n /= 2;
  } else {
    num = i;
    break;
  }
}

console.log('cycle value',n);
console.log('cycle iterators', num);

// slow iterator
function rec2(n) {
  if (n >= 50) {
   n = rec2(n / 2);
   num+= 1;
  }

  return n;
}

var callResult2 = rec2(n);
console.log('recursion value',callResult2);
console.log('recursion iterators', num);
