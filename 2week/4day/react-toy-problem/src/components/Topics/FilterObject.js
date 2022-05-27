import React, {useState} from 'react'

const FilterObject = () => {
  const [unFilteredArray, setUnFilteredArray] = useState([ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ])
  const [userInput, setUserInput] = useState('')
  const [filteredArray, setFilteredArray] = useState([])

  const handleInput = (e) => {
    setUserInput(e.target.value)
    console.log(userInput)
  }
  const handleButtonClick = () => {
    const array = []
    // gets the key names from the obj
    // const keys = Object.keys(unFilteredArray[0])
  
    for(let i =0; i < unFilteredArray.length; i++){
      console.log(unFilteredArray[i])
      if(unFilteredArray[i][userInput]){
        array.push(unFilteredArray[i])
      }
    }
    setFilteredArray(array)
  }

  return (
    <div className='puzzleBox filterObjectPB'>
        <h4 className='Filter Object'>Filtered Object</h4>
        <span className='puzzleText'>Original: {JSON.stringify(unFilteredArray)}</span>
        <input className='inputLine' onChange={handleInput}/>
        <button className='confirmationButton' onClick={handleButtonClick}>Filter</button>
        <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(filteredArray)}</span>
    </div>
  )
}

export default FilterObject