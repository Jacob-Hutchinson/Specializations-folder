import React, {useState} from 'react'

const App2 = () => {
    const [data, setData] = useState(['hello ', 'this ', 'is ', 'some ', 'data ', 'wow!'])

    const display = data.map((el) => <h2>{el}</h2>)

  return (
    <div>
        {display}
    </div>
  )
}

export default App2