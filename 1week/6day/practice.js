
let arr = [1,2,3,4,5]
let arr2 = [5,5,5,5,5]

function miniMaxSum(arr) {
    let min = [...arr]
    let max = [...arr]
    let minArr = min.sort((a,b) => a-b)
    let maxArr = max.sort((a,b) => b-a)
    
        if(minArr[0]){
            minArr.pop(minArr[0])
        }
    
    
        if(maxArr[0]){
            maxArr.pop(maxArr[0])
        }
        
        let minR = minArr.reduce((total, num) => total + num)
        let maxR = maxArr.reduce((total, num) => total + num)
    
    return console.log(minR, maxR)

}
miniMaxSum(arr2)