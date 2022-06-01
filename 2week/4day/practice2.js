function processData(input) {
    
    function combine(input) {
        deterimeType(input)
        console.log("combine")
    }
    function split(input) {
        deterimeType(input)
        console.log("split")
        
    }

    function toClass(input) {
        console.log("class")
    }

    function toVar() {
        console.log("variable")
    }

    function toMethod() {
        console.log("method")
    }

    function deterimeType(input) {
        if (input[2] === "C") {
            toClass(input)
        } else if (input[2] === "M") {
            toMethod()
        } else if (input[2] === "V") {
            toVar()
        }
    }

    if (input[0] === "S") {
        split(input)
    } else if (input[0] === "C") {
        combine(input)
    }
}

// console.log(processData("S;V;iPad"));
// console.log(processData('C;M;mouse pad'))
// console.log(processData('C;C;code swarm'))
console.log(processData('S;C;OrangeHighlighter'))
// processData('S;C;OrangeHighlighter')