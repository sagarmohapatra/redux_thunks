import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todo: [{ id: 1 , text: "hello world" }],
};
export const createTodo = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todos = {
        id: nanoid(),
        text: action.payload,
      };
      state.todo.push(todos);
    },
    removeTodo: (state, action) => {
      state.todo = state.todo.filter((tada) => tada.id !== action.payload );
    },
    editTodo: (state, action) => {
      state.todo.map((res)=>{
        if(res.id===action.payload.id){
          res.text=action.payload.text
        }
      })
    },
  },
});
export const { addTodo, removeTodo, editTodo } = createTodo.actions; 
export default createTodo.reducer;
