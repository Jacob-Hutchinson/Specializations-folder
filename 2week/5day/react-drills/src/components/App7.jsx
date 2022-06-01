import React, {useState} from 'react'

const App7 = () => {
    const [name, setName] = useState("");
    const [list, setList] = useState([])

  const handleSubmit = e => {
    e.preventDefault();
    setList([...list, name])
    // console.log(name);
    setName('')
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          type="text"
          onChange={e => setName(e.target.value)}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App7