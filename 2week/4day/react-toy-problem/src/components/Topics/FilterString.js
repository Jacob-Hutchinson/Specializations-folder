import React, {useState} from 'react'

const FilterString = () => {
  const [unFilteredArray, setUnFilteredArray] = useState([ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ])
  const [userInput, setUserInput] = useState('')
  const [filteredArray, setFilteredArray] = useState([])

  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  const handleFilterString = () => {
  let array = []
  for(let i =0; i < unFilteredArray.length; i++){
    if(unFilteredArray[i].includes(userInput)){
      array.push(unFilteredArray[i])
    }
  }
  setFilteredArray(array)
}

const makeString = (arr) => {
  return `[ ${arr.map(e => `"${e}"`).join(', ')} ]`;
}

  return (
    <div className='puzzleBox filterObjectPB'>
        <h4 className='Filter Object'>Filtered Object</h4>
        <span className='puzzleText'>Original: {makeString(unFilteredArray)}</span>
        <input className='inputLine' onChange={handleInput}/>
        <button className='confirmationButton' onClick={handleFilterString}>Filter</button>
        <span className='resultsBox filterObjectRB'>Filtered: {makeString(filteredArray)}</span>
    </div>
  )
}

export default FilterString