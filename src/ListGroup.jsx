import ListItem from "./components/ListItem"

const ListGroup = ({todos , removeTodo , editTodo}) => {
    return(
        <ul className="list-group">
       {
        todos.map(todo =>{
            return(
                <ListItem key={todo.id} todo = {todo}  removeTodo = {removeTodo} editTodo = {editTodo}/>
            )
        })
       }
       
      </ul>
    )
}

export default ListGroup