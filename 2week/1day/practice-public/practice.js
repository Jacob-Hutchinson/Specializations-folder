// 'use strict';

// // fundamentals part 2 practice video code along
// let hasDriverLicense = false 
// let passTest = true

// if(passTest) hasDriverLicense = true
// if(hasDriverLicense) console.log('i can drive')

// function logger(str) {
//     console.log(`${str}`)
// }
// logger('this is a called funtion')

// const fruitProcessor = () => {}

// converts time into military time with the format of '12:00:00AM/PM'
function timeConversion(s) {
    if(s === '12:00:00AM'){
        return '00:00:00'
    }else if(s === '12:00:00PM'){
        return '12:00:00'
    }else if(s.includes('A') || s.includes('a')){
        if(s[1] == 2){
            return s.replace('12', '00').split('').splice(0, 8).join('')
        }else{
            return s.split('').splice(0, 8).join('')
        }
    }else if(s.includes('P') || s.includes('p')){
        if(s[0] == 1 && s[1] == 2){
            return s.split('').splice(0, 8).join('')
        }
        let [hours, minutes, seconds] = s.split(':')
        seconds = seconds.split('').splice(0,2).join('')
        hours = +hours + 12
        hours = hours.toString()
        return `${hours}:${minutes}:${seconds}`
    }

}

console.log(timeConversion('12:40:00AM'))

