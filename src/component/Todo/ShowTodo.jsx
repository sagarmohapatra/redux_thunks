import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, editTodo } from "../../redux/todoSlice";

const ShowTodo = () => {
  const mstate = useSelector((state) => state.todox.todo);
  const dispatch = useDispatch();
  const [newuser, setnewuser] = useState("");
  console.log(mstate);
  return (
    <div>
      {mstate.map((data) => (
        <li key={data.id}>
          {data.text}
          <button onClick={() => dispatch(removeTodo(data.id))}>delete</button>
          <input
            placeholder="update value"
            onChange={(e) => setnewuser(e.target.value)}
            // value={newuser}
          />
          <button onClick={() => dispatch(editTodo({id:data.id,text:newuser}))}>
            Edit
          </button>
        </li>
      ))}
    </div>
  );
};

export default ShowTodo;
