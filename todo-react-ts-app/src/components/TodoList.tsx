import { RootState } from "../redux/store";
import { styles } from "../style/todoList.style";
import { TodosItem } from "./TodoItem";
import { useSelector } from "react-redux";

function TodoList() {
const todos= useSelector((state:RootState)=>state.todoList.todos)



  return (
    <ul style={styles.todoListContainer as React.CSSProperties}>
      {todos.map((todo) => (
        <TodosItem key={todo.id} todo={todo.text} id={todo.id}/>
      ))}
    </ul>
  );
}

export default TodoList;
