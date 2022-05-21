// // data tyoes 
// let num = 4
// let str = 'wow'
// let boo = true 
// let notDefined 
// let nulled = ''
// let arr = [1,2,'4','this is an array']
// //varable key words 
// let change = 'this var can chance value'
// const noChange = 'this is not ablt to change'
// var change2 = 'this var can chance value'

// const dolphins = [96, 108, 89]
// const koalas = [88, 91, 110]
// let averageD = dolphins.reduce((acc, cur) => acc + cur ,0)
// let averageK = koalas.reduce((acc, cur) => acc + cur ,0)

// averageD = Math.floor(averageD / 3)
// averageK = Math.floor(averageK / 3)
// console .log(averageD, averageK)

// if(averageD === averageK){
//     console.log('its a tie')
// }else if(averageD > averageK){
//     console.log('dolphins are the winner')
// }else{
//     consolw.log(`koalas are the winner`)
// }
let someArr = [2,3,4]
//destructuring an array
const [x,y,z] = someArr


// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

let [firstCat, , secondCat] = restaurant.categories
console.log(firstCat, secondCat)

// Reassigning destructured values
// [firstCat, secondCat] = [secondCat, firstCat]
// console.log(firstCat, secondCat)

// recive to return values to a fiunction
const [starter, main] = restaurant.order(2,0)
// console.log(starter, main)

//nested Destruction
const nested = [2, 4, [5, 6]]
// const [i, ,j] =nested
// console.log(i,j)
const [i, , [j, k]] = nested
// console.log(i, j, k)

// Default values
const [p=1,q=1,r=1, w=2] = [8,9]
// console.log(p,q,r,w)

//for- of loop

const menu = [...restaurant.starterMenu]

// for (const item of menu) console.log(item)

// show the index value of the original array
for (const [i, el] of menu.entries()) {
    //console.log(`${i + 1}: ${el}`);
  }
// console.log(...menu.entries())

// sets Cannot have duplicate values 
// sets create new Unique arrays theres no indexs in a set.

const orderSet = new Set(['pizza','pizza', 'risoto', 'pasta','pasta'])
console.log(orderSet)

console.log(new Set('jonas'))
console.log(orderSet.size)
console.log(orderSet.has('pizza'))
orderSet.add('Garlic bread')
orderSet.delete('risoto')
console.log(orderSet)

for(const order of orderSet) console.log(order)

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('jonasschmedtmann').size);
