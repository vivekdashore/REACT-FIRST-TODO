import { useEffect, useState } from "react"

const Form = ({addTodo , edit ,updateTodo }) => {

const [text , setText] = useState("")



const handleSubmit = (e) => {
  e.preventDefault()
  if(!edit.isEdit){
    addTodo(text)
  }else{
    updateTodo({id :edit.todo.id, text})
  }
  setText("")
}

useEffect(() =>{
  setText(edit.todo.text)
}, [edit])


  return (
   <form onSubmit={(e) => handleSubmit(e)}>
        <input value={text} onChange={(e) => setText(e.target.value)} type="text" required placeholder="Enter task"/>
        <button>Save</button>
      </form>
  )
}

export default Form
