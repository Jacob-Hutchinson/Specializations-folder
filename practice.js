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
