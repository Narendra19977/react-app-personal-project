import { useState } from "react";
import TodoForm from "../src/components/TodoForm";
import TodoList from "../src/components/TodoList";
import { styles } from "./style/app.style";

export default function App() {

  return (
    <div style={styles.appContainer as React.CSSProperties}>
      <h1 style={styles.appHeaderText}>Todo React App</h1>
      <TodoForm/>
      <TodoList />
    </div>
  );
}
