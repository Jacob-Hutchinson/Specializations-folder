// code wars practice in javascript

//kuy 8
// function digitize(n) {
//   return n
//     .toString()
//     .split("")
//     .reverse()
//     .map((number) => +number);
// }

//kuy 8
// function checkForFactor(base, factor) {
//   if (base % factor === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// kuy 7
// function squareDigits(num) {
//   return +num
//     .toString()
//     .split("")
//     .map((num) => {
//       return num * num;
//     })
//     .join("");
// }
// console.log(squareDigits(9119));

//kuy 8
// function betterThanAverage(classPoints, yourPoints) {
//   let total = 0;
//   classPoints.push(yourPoints);
//   classPoints.forEach((grade) => {
//     total += grade;
//   });
//   let average = total / classPoints.length;
//   return yourPoints > average ? true : false;
// }
// console.log(betterThanAverage([2, 3], 5));

//kuy 7
// function oddOrEven(array) {
//   let num = array.reduce((a, b) => {
//     return a + b;
//   }, 0);
//   return num % 2 === 0 ? "even" : "odd";
// }
// console.log(oddOrEven([0, 3]));

//kuy 8
// function feast(beast, dish) {
//   if (
//     beast[0] === dish[0] &&
//     beast[beast.length - 1] === dish[dish.length - 1]
//   ) {
//     return true;
//   } else {
//     return false;
//   }
//   return (
//     beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
//   );
// }
// console.log(feast("great blue heron", "garlic naan"));

//kuy 8
// function countBy(x, n) {
//   let z = [];
//   z.push(x);
//   for (let i = 0; i < n - 1; i++) {
//     z.push(z[z.length - 1] + x);
//   }
//   return z;
// }
// console.log(countBy(2, 5));

//kuy 8
// function booleanToString(b) {
//   return b.toString();
// }

//kuy 7
// function nbDig(n, d) {
//   let answer = 0;
//   let arr = [];
//   for (let i = 0; i < n + 1; i++) {
//     arr.push(i * i);
//   }
//   let results = arr.filter((num) => num.toString().includes(d));
//   results.map((num) => {
//     let str = num.toString();
//     for (const s of str) {
//       if (s == d) {
//         answer++;
//       }
//     }
//   });
//   return answer;
// }
// console.log(nbDig(25, 0));

//kuy 8
// var min = function (list) {
//   return Math.min(...list);
// };

// var max = function (list) {
//   return Math.max(...list);
// };
// console.log(
//   min([4, 6, 2, 1, 9, 63, -134, 566]),
//   max([4, 6, 2, 1, 9, 63, -134, 566])
// );

//kuy 8
// var countSheep = function (num) {
//   let answer = "";
//   for (let i = 1; i < num + 1; i++) {
//     answer += `${i} sheep...`;
//   }
//   return answer;
// };
// console.log(countSheep(3));

//kuy 7
// var number = function (array) {
//   return array.map((str, index) => `${index + 1}: ${str}`);
// };
// console.log(number(["a", "b", "c"]));

//kuy 6
// function comp(array1, array2) {
//   if (array2 == null || array1 == null) {
//     return false;
//   }
//   array2.forEach((num) => {
//     let remove = 0;
//     if (array1.includes(Math.sqrt(num))) {
//       remove = array1.indexOf(Math.sqrt(num));
//       array1.splice(remove, 1);
//     } else {
//       answer = true;
//     }
//   });
//   return array1.length ? false : true;
// }
// console.log(
//   comp(
//     [7, 6, 1, 3, 3, 4, 3, 3, 5, 10, 0, 2, 8, 2, 2, 0, 0, 4, 9, 1, 9, 10, 10],
//     [
//       16, 25, 100, 1, 9, 100, 81, 49, 9, 100, 64, 4, 4, 1, 0, 36, 0, 9, 16, 9,
//       1, 81, 4,
//     ]
//   )
// );

//kuy 8
// const quarterOf = (month) => {
//   if (month <= 3) {
//     return 1;
//   } else if (month <= 6) {
//     return 2;
//   } else if (month <= 9) {
//     return 3;
//   } else if (month <= 12) {
//     return 4;
//   }
// };
// console.log(quarterOf(11));

//kuy 6
// function duplicateEncode(word) {
//   let left = [];
//   word
//     .toLowerCase()
//     .split("")
//     .sort()
//     .map((element, index, array) => {
//       if (element === array[index + 1]) {
//         left.push(element);
//       }
//     });
//   left = left.join("").toLowerCase().split("");
//   let answer = [];
//   word.split("").map((element, index) => {
//     if (left.includes(element.toLowerCase())) {
//       answer.push(")");
//     } else {
//       answer.push("(");
//     }
//   });
//   return answer.join("");
// }
// console.log(duplicateEncode("(( @"));

// kuy 6
// function persistence(num) {
//   let count = 0;
//   while (num > 9) {
//     count++;
//     num = num
//       .toString()
//       .split("")
//       .map((str) => +str)
//       .reduce((a, b) => {
//         return a * b;
//       }, 1);
//   }
//   return count;
// }
// console.log(persistence(1));

//kuy 8
// function reverseWords(str) {
//   return str.split(" ").reverse().join(" ");
// }
// console.log(
//   reverseWords("The greatest victory is that which requires no battle")
// );

// kuy 8
// function correct(string) {
//   return string
//     .split("")
//     .map((element) => {
//       console.log(element);
//       if (element == 1) {
//         return (element = "I");
//       } else if (element == 5) {
//         return (element = "S");
//       } else if (element == " ") {
//         return element;
//       } else if (element == 0) {
//         return (element = "O");
//       } else {
//         return element;
//       }
//     })
//     .join("");
// }
// console.log(correct("par15"));

//kuy 8
// const stringToNumber = function (str) {
//   return +str;
// };

//kuy 8
// function rentalCarCost(d) {
//   let total = d * 40;
//   if (d < 7 && d > 2) {
//     total -= 20;
//   } else if (d >= 7) {
//     total -= 50;
//   }
//   return total;
// }
// console.log(rentalCarCost(6));

// kuy 7
// function calculateYears(principal, interest, tax, desired) {
//   let years = 0;
//   let subTax = 0;
//   while (principal < desired) {
//     years++;
//     subTax = principal * interest;
//     principal = principal + principal * interest;
//     principal = principal - subTax * tax;
//   }
//   return years;
// }
// console.log(calculateYears(1000, 0.05, 0.18, 1100));

//kuy 8
// String.prototype.toAlternatingCase = function (str) {
//   return this.split("")
//     .map((el) => {
//       if (el === el.toUpperCase()) {
//         return el.toLowerCase();
//       } else if (el === el.toLowerCase()) {
//         return el.toUpperCase();
//       } else {
//         return el;
//       }
//     })
//     .join("");
// };

// console.log("hello World".toAlternatingCase());

//kuy 8 --failed to hit conditionals
// function sumArray(array) {
//   if (array === null || array.length < 3) {
//     return 0;
//   }
//   let max = Math.max(...array);
//   let min = Math.min(...array);
//   array.splice(array.indexOf(max), 1);
//   array.splice(array.indexOf(min), 1);
//   return array.reduce((previous, current) => previous + current, 0);
// }
// console.log(sumArray([1, null]));

//kuy 8
// function sumMix(x) {
//   return x.map((num) => +num).reduce((pre, cur) => pre + cur, 0);
// }
// console.log(sumMix([9, 3, "7", "3"]));

//kuy 8
// function switchItUp(number) {
//   switch (number) {
//     case 0:
//       number = "Zero";
//       break;
//     case 1:
//       number = "One";
//       break;
//     case 2:
//       number = "Two";
//       break;
//     case 3:
//       number = "Three";
//       break;
//     case 4:
//       number = "Four";
//       break;
//     case 5:
//       number = "Five";
//       break;
//     case 6:
//       number = "Six";
//       break;
//     case 7:
//       number = "Seven";
//       break;
//     case 8:
//       number = "Eight";
//       break;
//     case 9:
//       number = "Nine";
//       break;

//     default:
//       break;
//   }
//   return number;
// }
// console.log(switchItUp(2));

//kuy 8
// const reverseSeq = (n) => {
//   let result = [];
//   for (let i = n; i > 0; i--) {
//     result.push(i);
//   }
//   return result;
// };
// console.log(reverseSeq(5));

//kuy 7
// String.prototype.toJadenCase = function () {
//   return this.split(" ")
//     .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
//     .join(" ");
// };
// console.log("How can mirrors be real if our eyes aren't real".toJadenCase());

//kuy 8
// function greet(name) {
//   return `Hello, ${name} how are you doing today?`;
// }
// kuy 7
// function getSum(a, b) {
//   let answer = 0;
//   if (a === b) {
//     return a;
//   } else if (a <= b) {
//     while (a <= b) {
//       console.log("hit");
//       console.log(a, b);
//       answer += a;
//       a++;
//     }
//   } else if (b <= a) {
//     while (b <= a) {
//       console.log(a, b);
//       answer += b;
//       b++;
//     }
//   }
//   return answer;
// }

// console.log(getSum(-1, 2));
