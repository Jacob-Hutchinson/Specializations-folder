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
