import React,  {useState, Component} from 'react'

const EvenAndOdd = () => {
  const [evenArr, setEvenArr] = useState([])
  const [OddArr, setOddArr] = useState([])
  const [UserInput, setUserInput] = useState([])

  const handleUserInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className='puzzleBox evenAndOddPB'>
      <h4>Even and Odds</h4>
      <input  className='inputLine' onChange={handleUserInput}/>
      <button className='confirmationButton'>button</button>
      <span className='resultsBox'></span>
      <span className='resultsBox'></span>
        
    </div>
  )
}

export default EvenAndOdd