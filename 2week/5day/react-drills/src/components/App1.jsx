import React, {useState} from 'react'

const TextApp = () => {
    const [inputText, setInputText] = useState('')

    const handleText = (e) => {
        setInputText(e.target.value)
    }

  return (
    <div>
        <textarea type='text' placeholder='check this out type here' onChange={handleText}/>
        <br></br>
        <span>{inputText}</span>
    </div>
  )
}

export default TextApp