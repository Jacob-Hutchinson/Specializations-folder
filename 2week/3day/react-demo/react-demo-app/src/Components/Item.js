import React, {useState}from 'react'
import '../App.css'

const Item = ({item, index, setList, list}) => {

const [ischecked, setIsChecked] = useState(false);

const handleDelete = (index) => {
    list.splice(index, 1)
    setList([...list])
}

  return (
    <div>
        <h3 onClick={() => setIsChecked(!ischecked)} className={ischecked ? 'Completed': null}>{item.task}</h3>
        <h5>{item.category}</h5>
        <h3 onClickCapture={() => handleDelete(index)}>X</h3>
    </div>
  )
}

export default Item