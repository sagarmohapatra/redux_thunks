import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";
import ShowTodo from "./ShowTodo";

const Todo = () => {
  const [input, setinput] = useState("");
  const dispatch = useDispatch();
  const change = (e) => {
    e.preventDefault();
   
    dispatch(addTodo(input));
    setinput("");
  };
  return (
    <div>
      <form onSubmit={change}>
        <input
          placeholder="add here"
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      <ShowTodo />
    </div>
  );
};

export default Todo;
