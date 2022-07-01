const arr = [2,7,2,3,3,4,1,8,1,4,6,7,6,9,9]

const findLoneNum = (a) => {
    a.reduce((x,y) => {
        console.log(x, 'this is x')
        console.log(y, 'this is y')
        console.log(x^y)
    })
    return a.sort().reduce((x,y)=> x^y)
    
}

console.log(findLoneNum(arr))