const form = document.querySelector('form')
const section = document.querySelector('section')
const animal = document.getElementById('animal')


const onClick = (e) => {
    e.preventDefault()
    console.log(e.target[0].value)

    const newItem = document.createElement('h2')
    newItem.textContent = e.target[0].value

    section.appendChild(newItem)
    
}

form.addEventListener('submit', onClick)

const addAnimals = e => {
    e.preventDefault()
    console.log(e)
    for(let i = 0; e.target.length - 1 > i; i++){
        console.log(e.target)
        console.log(e.target[i].checked)
        if(e.target[i].checked){
            const newAnimal = document.createElement('h3')
            newAnimal.textContent = e.target[i].value
            section.appendChild(newAnimal)

        }
    }
    // animal.textContent = 
}

animal.addEventListener('submit', addAnimals)

const clear = document.getElementById('clear')

const clearForm = e => {
    e.preventDefault()
    section.innerHTML = ''
    

}
clear.addEventListener('click', clearForm)

var jackson = 'jeremy'
let h = 0
const y = 0

h ++
jackson = 'jacob'

let number = 4
let string = '99 this is not a number but its 99 string'
let nulls = null
let define = undefined
let boolean = true
let array = [10, '10', 77, 'this is fisrt array']
let object = {name: 'jeremy', age: 27, job: 'worker'}

console.log(object.name, ' this is the object', object )
console.log(jackson, '   ', h, y)