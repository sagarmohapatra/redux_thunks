import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../../redux/countSlice";

const Count = () => {
  const mstate = useSelector(state => state.countx.value);
  console.log(mstate);
  const dispatch=useDispatch()
  return <div>
    <p>count:-{mstate}</p>
   
    <button onClick={()=>dispatch(increment())}>increment</button>
    <button onClick={()=>dispatch(decrement())}>decrement</button>
    <button onClick={()=>dispatch(reset())}>reset</button>
  </div>;
};

export default Count;
