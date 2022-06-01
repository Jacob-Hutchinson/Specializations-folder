import React, {useState} from 'react'

const App4 = () => {
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')

    const handleInput1 = e => {
        setInput1(e.target.value)
    }
    const handleInput2 = e => {
        setInput2(e.target.value)
    }
    const ButtonClick = (e) => {
        e.preventDefault()
        alert(`UserName: ${input1}  password: ${input2}`)
    }

  return (
    <div>
        <form type='submit'>
        <input type='text' onChange={handleInput1}/>
        <input type='text' onChange={handleInput2}/>
        <button type='click' onClick={ButtonClick}>submit</button>
        </form>
    </div>
  )
}

export default App4