import React, {useState} from 'react'

const Palindrome = () => {

  const [userInput, setUserInput] = useState('')
  const [Input, setInput] = useState('')

  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  const pal = () => {
    let value = ``
    let user = userInput.split('').join('')
    value = userInput.split('').reverse().join('') === user ? 'true' : 'false'
    setInput(value)
  }

  return (
    <div className='puzzleBox filterObjectPB'>
        <h4 className='Filter Object'>Filtered Object</h4>
        <input className='inputLine' onChange={handleInput}/>
        <button className='confirmationButton' onClick={pal}>Filter</button>
        <span className='resultsBox filterObjectRB'>Filtered: {Input}</span>
    </div>
  )
}

export default Palindrome