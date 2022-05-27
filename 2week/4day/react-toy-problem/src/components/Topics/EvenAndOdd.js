import React,  {useState} from 'react'

const EvenAndOdd = () => {
  const [evenArr, setEvenArr] = useState([])
  const [OddArr, setOddArr] = useState([])
  const [UserInput, setUserInput] = useState('')

  const handleUserInput = (e) => {
    setUserInput(e.target.value)
    console.log(UserInput)
  }
  const handleButtonClick = ()  => {
    const inputArr = UserInput.split(',')
    setEvenArr([])
    setOddArr([])
    for(let i = 0; i < inputArr.length; i++){
      const number = +inputArr[i].trim()
      if(number % 2 === 0) {
        setEvenArr((previousValue) => {
          return [...previousValue, number]
        })
      }else{
        setOddArr((previousValue) => {
          return [...previousValue, number]
        })
      }
    }
    
  }

  return (
    <div className='puzzleBox evenAndOddPB'>
      <h4>Even and Odds</h4>
      <input  className='inputLine' onChange={handleUserInput}/>
      <button className='confirmationButton' onClick={handleButtonClick}>button</button>
      <span className='resultsBox'>{`Evens: [${evenArr.join(', ')}]`}</span>
      <span className='resultsBox'>Odds: [{OddArr.join(', ')}]</span>
        
    </div>
  )
}

export default EvenAndOdd