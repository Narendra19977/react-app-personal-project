import { Fragment } from "react";
import { styles } from "../style/todoList.style";
import { useDispatch } from "react-redux";
interface TodosItemPropsType {
  id: number;
  todo: string;
}
function TodosItem({ id, todo }: TodosItemPropsType) {
  const dispatch=useDispatch()
  const handleRemoveTodo=(id:number)=>{
    dispatch({type:'todos/removeTodo',payload:{id}})
  }
  return (
    <Fragment>
      <li style={styles.todoListItem}>
        <span style={styles.todoListText}>{todo}</span>
        <button onClick={() => handleRemoveTodo(id)} style={styles.todoListButton}>
          Delete
        </button>
      </li>
    </Fragment>
  );
}
export { TodosItem };
