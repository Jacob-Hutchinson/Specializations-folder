import React, {useState} from 'react'

const App3 = () => {
    const [userInput, setUserInput] = useState('')
    const [dataArr, setDataArr] = useState(['pizza ', 'tacos ', 'bbq ', 'pasta ', 'soup ', 'burgers ', 'salad'])
    const [filter, setFilter] = useState(dataArr.map(el => <h2>{el}</h2>))
    
    
    
    const handleInput = (e) => {
        setFilter(
        dataArr
        .filter(el => el.includes(e.target.value))
        .map(el => <h2>{el}</h2>))
    }

  return (
    <div>
        <input type='text' placeholder='filter data' onChange={handleInput}/>
        {filter}
    </div>
  )
}

export default App3