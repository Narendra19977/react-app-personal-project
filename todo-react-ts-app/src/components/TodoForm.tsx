import React, { useState } from "react";
import { useTodosContext } from "../context/todoContext";
import { styles } from "../style/todoForm.style";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

function TodoForm() {
  const [todo,setTodo]=useState("")
  const dispatch=useDispatch()
  const handleAddTodo=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    dispatch({type:"todos/addTodo",payload:{text:todo}})
  }
  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        onChange={(e)=>setTodo(e.target.value)}
        value={todo}
        placeholder="Enter a todo..."
        style={styles.todoFormInput}
      />
      <button
        type="submit"
        style={styles.todoFormSubmitButton}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#3b82f6")}
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
