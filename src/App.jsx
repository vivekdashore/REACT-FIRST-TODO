import { useState } from "react"
import Form from "./components/Form"
import Navbar from "./components/Navbar"
import ListGroup from "./ListGroup"

const App = () =>{

const [todos , setTodos] = useState([])


const [edit , setEdit] = useState({
  todo : {},
  isEdit : false
})

// let count = 0

const [count , setCount] = useState(0)

//increase count value


const increaseCount = () =>{
//   count = count + 1
// console.log(count)
if(count<10){
  setCount(count + 1)
} else{
  
setCount(0)
}
}


//decrease count value

const decreaseCount = () =>{
  if (count >0){
    setCount(count - 1)
  }
  else{
   
    setCount(10)
  }
}

const[theme , setTheme] = useState(false)

const changeTheme = () =>{
  if(theme){
    setTheme(false)
  } else {
    setTheme(true)
  }
}


// remove todo

const removeTodo = (id) =>{
  setTodos(todos.filter(item =>{
    if(item.id !== id){
      return item
    }
  }))

}

//add todo
const addTodo = (text) =>{
setTodos([{id : crypto.randomUUID() , text : text}, ...todos])
}

//edit Todo
const editTodo = (todo) => {
setEdit({
  todo : todo,
  isEdit : true
})
}


// update Todo

const updateTodo = (updatedTodo) => {

  // setTodos(todos.map(item =>{
  //   if(item.id === updatedTodo.id){
  //     return updatedTodo
  //   }
  //     else{
  //       return item
      
  //   }
  // }))

setTodos(todos.map(item => item.id === updatedTodo.id ? updateTodo : item))

  setEdit ({ todo : {}, isEdit : false})
}



  return(
    <>
    <Navbar />
    <div style={{backgroundColor:theme ? "gray" : "white"}} className="container">
      <h1>{count}</h1>
      <button className="btn" onClick={() => increaseCount()}>Increase Count</button>
      <button className="btn" onClick={() => decreaseCount()}>decrease Count</button>
      <button className="btn" onClick={() => changeTheme()}>Change Theme</button>
      <Form  addTodo = {addTodo} edit = {edit} updateTodo = {updateTodo} />
      <ListGroup  todos = {todos} removeTodo ={removeTodo} editTodo = {editTodo}/>  
    </div>
    </>
  )
}

export default App