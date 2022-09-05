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
