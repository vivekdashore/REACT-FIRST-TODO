import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

const ListItem = ({todo , removeTodo , editTodo}) => {




    return(
         <li className="list-group-item">
          <div>
            <p>Id : {todo.id}</p>
            <h2>{todo.text}</h2>
          </div>
          <div>
            <button onClick={() => editTodo(todo)} className="edit-btn"><FaEdit/></button>
            <button onClick={() => removeTodo(todo.id)} className="del-btn"><FaTrashCan/></button>
          </div>
        </li>
    )
}

export default ListItem