import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoItem{
    text:string;
    id:number
}

interface Todos{
    todos:TodoItem[]
}

const initialState:Todos={
    todos:[]
}

const todoSlice=createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodo:(state,action:PayloadAction<{text:string}>)=>{
            const newTodo={
                text:action.payload.text,
                id:new Date().getTime()
            }
            state.todos.push(newTodo)
        },
        removeTodo:(state,action:PayloadAction<{id:number}>)=>{
           const filteredTodos=state.todos.filter(todo=>todo.id!==action.payload.id)
        }
    }
})
export const {addTodo,removeTodo} =todoSlice.actions
export default todoSlice.reducer