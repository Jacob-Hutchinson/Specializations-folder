// function highAndLow(numbers){
//     numbers = numbers.split(' ').map(Number)
//     let result = Math.max.apply(0, numbers)
//     result = result + Math.max.apply(0, numbers)
//   }

//   console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))

function filter_list(l) {
    return arr = l.filter((l) => typeof l !== 'string')
  }


  console.log(filter_list([1,2,'aasf','1','123',123]))