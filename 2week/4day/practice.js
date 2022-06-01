function processData(input) {
    function combine() {}
    function split() {}

    function processsV(input) {
        arr.splice(0, 4);
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toUpperCase()) {
          arr[i] = arr[i].toLowerCase();
          arr.splice(i, 0, " ");
        }
      }
    }
    function processC(input) {

        
            arr.splice(0, 4);
            arr[0] = arr[0].toUpperCase();
            for (let i = 1; i < arr.length; i++) {
              if (arr[i] === arr[i].toUpperCase()) {
                arr[i] = arr[i].toLowerCase();
                Console.log(arr)
                arr.splice(i, 0, " ");
              }
            }
    }

    function processM(input) {}
  let arr = input.split("");
  if (arr[0] === "S") {
      split()
    if (arr[2] === "V") {
      processsV() //pass data 

      
      if (arr[2] === "M") {
        arr.splice(0, 4);
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === arr[i].toUpperCase()) {
            arr[i] = arr[i].toLowerCase();
            arr.splice(i, 0, " ");
          }
          arr.push("(");
          arr.push(")");
        }
      }
    }
    if (arr[2] === "C") {
        processC()
    }
  } else if (arr[0] === "C") {
    if (arr[2] === "V") {
      arr.splice(0, 4);
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === " ") {
          arr[i + 1] = arr[i + 1].toUpperCase();
        }
        arr = arr.filter((c) => c !== " ");
      }
    }
    if (arr[2] === "C") {
      arr.splice(0, 4);
      arr[0] = arr[0].toUpperCase();
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === " ") {
          arr[i + 1] = arr[i + 1].toUpperCase();
        }
        arr = arr.filter((c) => c !== " ");
      }
    }
    if (arr[2] === "M") {
      arr.splice(0, 4);
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === " ") {
          arr[i + 1] = arr[i + 1].toUpperCase();
        }
        arr = arr.filter((c) => c !== " ");
      }
      arr.push("(");
      arr.push(")");
    }
  }
  return arr.join("");
}

console.log(processData("S;V;iPad"));
console.log(processData('C;M;mouse pad'))
console.log(processData('C;C;code swarm'))
console.log(processData('S;C;OrangeHighlighter'))
