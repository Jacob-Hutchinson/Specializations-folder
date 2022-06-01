import List6 from './App6'

const Todo = (props) => {
    console.log(props)
    const listDis = props.subName.map((item) => {
      return <h3>{item}</h3>
    })
  return (
    <div>
        {listDis}
    </div>
  )
}

export default Todo