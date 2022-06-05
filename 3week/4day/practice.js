const strings = ['ab', 'ab', 'bc', 'abc', 'c']
const queries = ['ab', 'abc']



function matchingStrings(strings, queries) {
    let counter = 0
    let result = []
    for(let i = 0; i < queries.length; i++){
        strings.forEach(el => {
            if(el == queries[i]){
                counter++
            }
        })
            result.push(counter)
            counter = 0
    }
return result
}


console.log(matchingStrings(strings, queries))